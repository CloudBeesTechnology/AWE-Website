import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CandidatesSchema } from "../../services/Validation";
import { generateClient } from "aws-amplify/api";
import { GoUpload } from "react-icons/go"; // Ensure this import is correct
import { useLocation } from "react-router-dom";
import { listPersonalDetails } from "../../../graphql/queries";
import { RecODFunc } from "./RecODFunc";
import { FormField } from "./FormField";
import { uploadDocs } from "./UploadDocs";
import { SpinLogo } from "./SpinLogo";
const client = generateClient();

export const OtherDetails = () => {
  const { submitODFunc } = RecODFunc();
  const [notification, setNotification] = useState(false);
  const location = useLocation();
  const navigatingEducationData = location.state?.FormData;
  const [latestTempIDData, setLatesTempIDData] = useState("");
  const [uploadedFileNames, setUploadedFileNames] = useState({
    uploadResume: null,
    uploadCertificate: null,
    uploadPp: null,
  });
  const [uploadedDocs, setUploadedDocs] = useState({
    uploadResume: null,
    uploadCertificate: null,
    uploadPassport: null,
  });
  const {
    register,
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CandidatesSchema),
    defaultValues: {
      perIS: "no",
      perIDesc: "",
    },
  });

  // File upload handler
  const handleFileChange = async (e, type) => {
    const file = e.target.files[0];
    setValue(type, file); // Set file value for validation
    const personName = navigatingEducationData?.name;
    if (file) {
      if (type === "uploadResume") {
        await uploadDocs(file, "uploadResume", setUploadedDocs, personName);

        setUploadedFileNames((prev) => ({
          ...prev,
          uploadResume: file.name, // Store the file name for display
        }));
      } else if (type === "uploadCertificate") {
        await uploadDocs(
          file,
          "uploadCertificate",
          setUploadedDocs,
          personName
        );

        setUploadedFileNames((prev) => ({
          ...prev,
          uploadCertificate: file.name, // Store the file name for display
        }));
      } else if (type === "uploadPp") {
        await uploadDocs(file, "uploadPassport", setUploadedDocs, personName);

        setUploadedFileNames((prev) => ({
          ...prev,
          uploadPp: file.name, // Store the file name for display
        }));
      }
    }
  };

  const getTotalCount = async () => {
    try {
      const result = await client.graphql({
        query: listPersonalDetails,
      });
      const items = result?.data?.listPersonalDetails?.items || [];
      return items.length; // Return the count of all entries
    } catch (error) {
      console.error("Error fetching total count:", error);
      return 0; // Return 0 if there's an error
    }
  };

  const generateNextTempID = (totalCount) => {
    const nextNumber = totalCount + 1;
    const nextTempID = `TEMP${String(nextNumber).padStart(3, "0")}`;
    return nextTempID;
  };

  useEffect(() => {
    const fetchNextTempID = async () => {
      const totalCount = await getTotalCount();
      const nextTempID = generateNextTempID(totalCount);
      setLatesTempIDData(nextTempID); // Set the generated ID
    };
    fetchNextTempID();
  }, []);

  const onSubmit = async (data) => {
    try {
      const reqValue = {
        ...data,
        ...navigatingEducationData,
        eduDetails: JSON.stringify(data.eduDetails),
        familyDetails: JSON.stringify(data.familyDetails),
        workExperience: JSON.stringify(data.workExperience),
        emgDetails: JSON.stringify(data.emgDetails),
        referees: JSON.stringify(data.referees),
        relatives: JSON.stringify(data.relatives),
        uploadResume: uploadedDocs.uploadResume,
        uploadCertificate: uploadedDocs.uploadCertificate,
        uploadPp: uploadedDocs.uploadPassport,
        status:"Acitve"
      };

      await submitODFunc({
        reqValue,
        latestTempIDData,
      });
      setNotification(true);
    } catch (error) {
      console.log(error);
      
      console.error(
        "Error submitting data to AWS:",
        JSON.stringify(error, null, 2)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-5">
      {/* Salary Expected */}
      <div className=" grid grid-cols-2 gap-5">
        <div className="mb-4">
      <FormField
                label="Number of Years Experience in Applied Position"
                register={register}
                name="noExperience"
                type="text"
                errors={errors}
                
              />
        
        </div>
        <div className="mb-4">
        <FormField
                label="Salary Expected"
                register={register}
                name="salaryExpectation"
                type="text"
                errors={errors}
                
              />
      
        </div>
      </div>

      {/* Termination Notice */}
      <div className="mb-4">
      <FormField
                label="  Termination Notice for Present job (month/Date)"
                register={register}
                name="noticePeriod"
                type="text"
                errors={errors}
                
              />
      
       
      </div>

      <div className="mb-4">
        <label className="text_size_6">
          Have you been interviewed for a position at this company before?
        </label>
        <div className="flex justify-between items-center mt-2 mb-4">
          <div>
            <Controller
              name="perIS"
              control={control}
              defaultValue="no" // Provide a default value
              render={({ field }) => (
                <>
                  <input
                    type="radio"
                    id="yes"
                    {...field}
                    value="yes"
                    className="mr-2 p-3"
                  />
                  <label htmlFor="yes" className="mr-4 text_size_6">
                    Yes
                  </label>

                  <input
                    type="radio"
                    id="no"
                    {...field}
                    value="no"
                    className="mr-2 p-3"
                    defaultChecked // This ensures that "No" is checked by default
                  />
                  <label htmlFor="no" className="text_size_6">
                    No
                  </label>
                </>
              )}
            />
            {errors.perIS && (
              <p className="text-[red] text-xs mt-1">{errors.perIS.message}</p>
            )}
          </div>

          <div>
            <label className="w-[350px] text_size_7">
              If yes, please give Details
            </label>
            <Controller
              name="perIDesc"
              control={control}
              defaultValue="" // Provide an initial value to avoid uncontrolled behavior
              render={({ field }) => (
                <input
                  {...field}
                  disabled={watch("perIS") !== "yes"}
                  className={`mt-2 text_size_7 p-2.5 bg-lite_skyBlue border border-[#dedddd] text-dark_grey outline-none rounded w-full ${
                    errors.perIDesc ? "border-[red]" : ""
                  }`}
                />
              )}
            />
            {errors.perIDesc && (
              <p className="text-[red] text-xs mt-4">
                {errors.perIDesc.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Support Information */}
      <div className="mb-4">
        <label className="text_size_6 mb-2">
          Any other information you wish to provide?
        </label>
        <textarea
          {...register("supportInfo")}
          className="resize-none mt-2 text_size_7 p-2.5 bg-lite_skyBlue border border-[#dedddd] text-dark_grey outline-none rounded w-full"
          rows="4"
        ></textarea>
      </div>

      {/* File Uploads */}
      <div className="my-5 ">
        <label className="text_size_6">Choose file</label>
        <div className="flex items-center justify-between mt-3 mb-10 gap-5">
          {/* Resume Upload */}
          <div>
            <label className="flex items-center px-3 py-2 text_size_7 p-2.5 bg-lite_skyBlue border border-[#dedddd] rounded-md cursor-pointer">
              Upload Resume
              <input
                type="file"
                {...register("uploadResume")}
                onChange={(e) => handleFileChange(e, "uploadResume")}
                className="hidden"
                accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
              <span className="ml-2">
                <GoUpload />
              </span>
            </label>
            {/* Display uploaded file name */}
            {uploadedFileNames.uploadResume ? (
              <p className="text-xs mt-1 text-grey">
                Uploaded: {uploadedFileNames.uploadResume}
              </p>
            ):(  <p className="text-[red] text-xs mt-1">
              {errors?.uploadResume?.message}
            </p>)}

          
          </div>

          {/* Certificate Upload */}
          <div>
            <label className="flex items-center px-3 py-2 text_size_7 p-2.5 bg-lite_skyBlue border border-[#dedddd] rounded-md cursor-pointer">
              Qualification Certificate
              <input
                type="file"
                {...register("uploadCertificate")}
                onChange={(e) => handleFileChange(e, "uploadCertificate")}
                className="hidden"
                accept="application/pdf, image/png, image/jpeg"
              />
              <span className="ml-2">
                <GoUpload />
              </span>
            </label>
            {/* Display uploaded file name */}
            {uploadedFileNames.uploadCertificate ? (
              <p className="text-xs mt-1 text-grey">
                Uploaded: {uploadedFileNames.uploadCertificate}
              </p>
            ):(<p className="text-[red] text-xs mt-1">
              {errors?.uploadCertificate?.message}
            </p>)}
        
          </div>

          {/* Passport Upload */}
          <div>
            <label className="flex items-center px-3 py-2 text_size_7 p-2.5 bg-lite_skyBlue border border-[#dedddd] rounded-md cursor-pointer">
              Upload IC / Passport
              <input
                type="file"
                {...register("uploadPp")}
                onChange={(e) => handleFileChange(e, "uploadPp")}
                className="hidden"
                accept="application/pdf, image/png, image/jpeg"
              />
              <span className="ml-2">
                <GoUpload />
              </span>
            </label>
            {/* Display uploaded file name */}
            {uploadedFileNames.uploadPp ? (
              <p className="text-xs mt-1 text-grey">
                Uploaded: {uploadedFileNames.uploadPp}
              </p>
            ):(<p className="text-[red] text-xs mt-1">
              {errors?.uploadPp?.message}
            </p>)}
           
          </div>
        </div>
      </div>

      <div className="flex items-start mb-4">
        <input
          type="checkbox"
          id="employeeStatement"
          {...register("empStatement", {
            required: "This field is required",
          })}
          className="w-5 h-5 border-medium_grey rounded"
        />
        <label htmlFor="empStatement" className="ml-2 text-gray-700">
          I Hereby Declare that every statement made by me in this form is true
          and correct and I understand and agree that any false declaration made
          by me may be ground for termination of my contract of employment
          without notice.
        </label>
      </div>
      {errors.empStatement && (
        <p className="text-[red] text-sm">{errors?.empStatement?.message}</p>
      )}

      <div className="text-center my-10">
        <button type="submit" className="primary_btn">
          Submit
        </button>
      </div>
      {notification && (
        <SpinLogo
          text="Your Application Submitted Successfully"
          notification={notification}
          path="/recrutiles/candidate"
        />
      )}
    </form> 
  );
};
// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { CandidatesSchema } from "../../services/Validation";
// import { generateClient } from "aws-amplify/api";
// import { uploadData } from "aws-amplify/storage";
// import { GoUpload } from "react-icons/go"; // Ensure this import is correct
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// const client = generateClient();

// export const OtherDetails = () => {
//   const location = useLocation();
//   const navigatingEducationData = location.state?.FormData;
//   // console.log("Received form data:", navigatingEducationData);
//   const [formData, setFormData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const [updateResume, setUpdateResume] = useState("");
//   const [updateCertificate, setUpdateCertificate] = useState("");
//   const [updatePassport, setUpdatePassport] = useState("");

//   useEffect(()=>{
//     window.scrollTo({
//       top:0,
//       behavior:"smooth"
//     })
//       },[])
//   const {
//     register,
//     control,
//     watch,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(CandidatesSchema),
//     defaultValues: {
//       perInterviewStatus: "no",
//       perInterviewDescription: '',
//     },
//   });
//   const handleFileChange = async (e, type) => {
//     const file = e.target.files;
//     const uploadFiles = e.target.files[0];
//     setValue(type, file);

//     if (file) {
//       if (type === "uploadResume") {
//         await uploadResume(uploadFiles);
//         setValue(type, file); // Set the file value for validation
//       } else if (type === "uploadCertificate") {
//         await uploadCertificate(uploadFiles);
//         setValue(type, file); // Set the file value for validation
//       } else if (type === "uploadPassport") {
//         await uploadPassport(uploadFiles);
//         setValue(type, file); // Set the file value for validation
//       }
//     }
//   };

//   const uploadResume = async (file) => {
//     try {
//       const result = await uploadData({
//         path: `uploadResume/${file.name}`,
//         data: file,
//       }).result;
//       const filePath = result.path;
//       const encodedFilePath = encodeURIComponent(filePath);
//       const fileUrl = `https://awe-adinin-files-storage-1982502de-dev.s3.ap-southeast-1.amazonaws.com/${encodedFilePath}`;
//       console.log("Resume uploaded successfully. File URL:", fileUrl);
//       setUpdateResume(fileUrl);
//     } catch (error) {
//       console.log("Error uploading resume:", error);
//     }
//   };

//   const uploadCertificate = async (file) => {
//     try {
//       const result = await uploadData({
//         path: `uploadCertificate/${file.name}`,
//         data: file,
//       }).result;
//       const filePath = result.path;
//       const encodedFilePath = encodeURIComponent(filePath);
//       const fileUrl = `https://awe-adinin-files-storage-1982502de-dev.s3.ap-southeast-1.amazonaws.com/${encodedFilePath}`;
//       console.log("Certificate uploaded successfully. File URL:", fileUrl);
//       setUpdateCertificate(fileUrl);
//     } catch (error) {
//       console.log("Error uploading certificate:", error);
//     }
//   };

//   const uploadPassport = async (file) => {
//     try {
//       const result = await uploadData({
//         path: `uploadPassport/${file.name}`,
//         data: file,
//       }).result;
//       const filePath = result.path;
//       const encodedFilePath = encodeURIComponent(filePath);
//       const fileUrl = `https://awe-adinin-files-storage-1982502de-dev.s3.ap-southeast-1.amazonaws.com/${encodedFilePath}`;
//       console.log("Passport uploaded successfully. File URL:", fileUrl);
//       setUpdatePassport(fileUrl);
//     } catch (error) {
//       console.log("Error uploading passport:", error);
//     }
//   };

//   const onSubmit = async (data) => {
//     console.log(data);

//     try {
//       const updatedValue = {
//         ...data,
//         uploadCertificate: updateCertificate,
//         uploadPassport: updatePassport,
//         uploadResume: updateResume,
//       };
//       // console.log(updatedValue);
//       const storedData = {
//         ...updatedValue,
//         ...navigatingEducationData,
//       };
//       // console.log(storedData);

//       const totalData = {
//         profilePhoto:storedData.profilePhoto,
//         position: storedData.position,
//         contractType: storedData.contractType,
//         employeeType: storedData.employeeType,
//         name: storedData.name,
//         chinese: storedData.chinese,
//         gender: storedData.gender,
//         dateOfBirth: storedData.dateOfBirth,
//         age: storedData.age,
//         email: storedData.email,
//         countryOfBirth: storedData.countryOfBirth,
//         nationality: storedData.nationality,
//         otherNationality: storedData.otherNationality,
//         marital: storedData.marital,
//         race: storedData.race,
//         otherRace: storedData.otherRace,
//         religion: storedData.religion,
//         otherReligion: storedData.otherReligion,

//         // personalDetails
//         icNo: storedData.icNo,
//         icExpiry: storedData.icExpiry,
//         icColour: storedData.icColour,
//         passportNo: storedData.passportNo,
//         alternateNo: storedData.alternateNo,
//         passportIssued: storedData.passportIssued,
//         passportExpiry: storedData.passportExpiry,
//         passportDestination: storedData.passportDestination,
//         contactNo: storedData.contactNo,
//         presentAddress: storedData.presentAddress,
//         permanentAddress: storedData.permanentAddress,
//         drivingLicense: storedData.drivingLicense,
//         language: storedData.language,
//         familyDetails: storedData.familyDetails,
//         educationDetails: storedData.educationDetails,
//         workExperience: storedData.workExperience,

//         // educationDetails
//         referees:
//          storedData.referees?.map((referee) => ({
//             name: referee.name,
//             address: referee.address,
//             phoneNumber: referee.phoneNumber,
//             profession: referee.profession,
//           })) || [],
//         relatives:
//          storedData.relatives?.map((relative) => ({
//             name: relative.name,
//             position: relative.position,
//             relationship: relative.relationship,
//           })) || [],
//         description:storedData.description || "",
//         emergencyContact:
//          storedData.emergencyContact?.map((contact) => ({
//             name: contact.name,
//             relationship: contact.relationship,
//             address: contact.address,
//             phoneNumber: contact.phoneNumber,
//             bloodGroup: contact.bloodGroup,
//           })) || [],
//         disease:storedData.disease || "",
//         liquor:storedData.liquor || "",
//         crime:storedData.crime || "",
//         diseaseDescription:
//          storedData.disease === "Yes"
//             ?storedData.diseaseDescription || ""
//             : "",
//         liquorDescription:
//          storedData.liquor === "Yes"
//             ?storedData.liquorDescription || ""
//             : "",
//         crimeDescription:
//          storedData.crime === "Yes"
//             ?storedData.crimeDescription || ""
//             : "",

//         // otherDetails
//         salaryException: storedData.salaryException || "",
//         noticePeriod: storedData.noticePeriod || "",
//         tempID: storedData.noticePeriod || "",
//         perInterviewStatus: storedData.perInterviewStatus || "",
//         perInterviewDescription:
//           storedData.perInterviewStatus === "yes"
//             ? storedData.perInterviewDescription || ""
//             : "",
//         supportInfo: storedData.supportInfo || "",
//         uploadResume: storedData.uploadResume,
//         uploadCertificate: storedData.uploadCertificate,
//         uploadPassport: storedData.uploadPassport,
//       };

//       // console.log(totalData);

//       // Combine all form data
//       // const result = await client.graphql({
//       //   query: createCandidateApplicationForm,
//       //   variables: {
//       //     input: totalData ,
//       //   },
//       // }).then((res)=>{
//       //   console.log(res)

//       // }).catch((err)=>{
//       //   console.log(err);
//       // })

//       // console.log("Successfully submitted:", result);

//       // Clear localStorage after successful submission
//       // localStorage.removeItem('navigatingEducationData.applicationData');
//       // localStorage.removeItem('personalDetails');
//       // localStorage.removeItem('educationDetails');
//       // localStorage.removeItem('updatedValue');
//     } catch (error) {
//       console.log(error);

//       console.error(
//         "Error submitting data to AWS:",
//         JSON.stringify(error, null, 2)
//       );
//     }
//   };
//   // console.log("Successfully submitted Three Data:", navigateOtherData);

//   // const handleFileChange = async (e, type) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     if (type === "uploadResume") {
//   //       await uploadResume(file);
//   //     } else if (type === "uploadCertificate") {
//   //       await uploadCerficate(file);
//   //     } else if (type === "uploadPassport") {
//   //       await uploadPassport(file);
//   //     }
//   //   }
//   // };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="pt-5">
//       {/* Salary Expected */}
//       <div className="mb-4">
//         <label className="text_size_6 mb-2">Salary Expected</label>
//         <input
//           type="text"
//           {...register("salaryException")}
//           className="input-field"
//         />
//       </div>

//       {/* Termination Notice */}
//       <div className="mb-4">
//         <label className="text_size_6 mb-2">
//           Termination Notice for Present job (month/Date)
//         </label>
//         <input
//           type="text"
//           {...register("noticePeriod")}
//           className="input-field"
//         />
//         {errors.noticePeriod && (
//           <p className="text-[red] text-xs mt-1">
//             {errors.noticePeriod.message}
//           </p>
//         )}
//       </div>
//       <div className="mb-4">
//         <label className="text_size_6 mb-2">
//           Termination Notice for Present job (month/Date)
//         </label>
//         <input
//           type="text"
//           {...register("tempID")}
//           className="input-field"
//         />
//         {errors.tempID && (
//           <p className="text-[red] text-xs mt-1">
//             {errors.tempID.message}
//           </p>
//         )}
//       </div>
//       {/* Interviewed Before */}
// <div className="mb-4">
//   <label className="text_size_6">
//     Have you been interviewed for a position at this company before?
//   </label>
//   <div className="flex justify-between items-center mt-2 mb-4 max-sm:flex-col">
//     <div className="mt-2">
//       <Controller
//         name="perInterviewStatus"
//         control={control}
//         defaultValue="no" // Provide a default value
//         render={({ field }) => (
//           <>
//             <input
//               type="radio"
//               id="yes"
//               {...field}
//               value="yes"
//               className="mr-2 p-3"
//             />
//             <label htmlFor="yes" className="mr-4 text_size_6">
//               Yes
//             </label>

//             <input
//               type="radio"
//               id="no"
//               {...field}
//               value="no"
//               className="mr-2 p-3"
//               defaultChecked // This ensures that "No" is checked by default
//             />
//             <label htmlFor="no" className="text_size_6">
//               No
//             </label>
//           </>
//         )}
//       />
//       {errors.perInterviewStatus && (
//         <p className="text-[red] text-xs mt-1">
//           {errors.perInterviewStatus.message}
//         </p>
//       )}
//     </div>

//     <div className="mt-4">
//       <label className="w-full sm:w-[350px] text_size_7">
//         If yes, please give Details
//       </label>
//       <Controller
//         name="perInterviewDescription"
//         control={control}
//         defaultValue="" // Provide an initial value to avoid uncontrolled behavior
//         render={({ field }) => (
//           <input
//             {...field}
//             disabled={watch("perInterviewStatus") !== "yes"}
//             className={`input-field ${
//               errors.perInterviewDescription ? "border-[red]" : ""
//             }`}
//           />
//         )}
//       />
//       {errors.perInterviewDescription && (
//         <p className="text-[red] text-xs mt-4">
//           {errors.perInterviewDescription.message}
//         </p>
//       )}
//     </div>
//   </div>
// </div>

//       {/* Support Information */}
//       <div className="mb-4">
//         <label className="text_size_6 mb-2">
//           Any other information you wish to provide?
//         </label>
//         <textarea
//           {...register("supportInfo")}
//           className="resize-none input-field"
//           rows="4"
//         ></textarea>
//       </div>

//       {/* File Uploads */}
//       <div className="my-5">
//         <label className="text_size_6">Choose file</label>
//         <div className="flex items-center justify-between mt-3 mb-10 max-sm:flex-wrap">
//           {/* Resume Upload */}
//           <div className="max-sm:w-full  mb-4">
//             <label className="flex justify-between items-center px-3 py-2 text_size_7 p-2.5 bg-lite_skyBlue border border-[#dedddd] rounded-md cursor-pointer">
//               Upload Resume
//               <input
//                 type="file"
//                 onChange={(e) => handleFileChange(e, "uploadResume")}
//                 className="hidden"
//                 accept=".pdf"
//               />
//               <span className="ml-2">
//                 <GoUpload />
//               </span>
//             </label>
//             {errors.uploadResume && (
//               <p className="text-[red] text-xs mt-1">
//                 {errors.uploadResume?.message}
//               </p>
//             )}
//           </div>

//           {/* Certificate Upload */}
//           <div className="max-sm:w-full mb-4">
//             <label className="flex justify-between items-center px-3 py-2 text_size_7 p-2.5 bg-lite_skyBlue border border-[#dedddd] rounded-md cursor-pointer">
//               Qualification Certificate
//               <input
//                 type="file"
//                 onChange={(e) => handleFileChange(e, "uploadCertificate")}
//                 className="hidden"
//                 accept=".jpg,.png"
//               />
//               <span className="ml-2">
//                 <GoUpload />
//               </span>
//             </label>
//             {errors.uploadCertificate && (
//               <p className="text-[red] text-xs mt-1">
//                 {errors.uploadCertificate?.message}
//               </p>
//             )}
//           </div>

//           {/* Passport Upload */}
//           <div className="max-sm:w-full">
//             <label className="flex justify-between items-center px-3 py-2 text_size_7 p-2.5 bg-lite_skyBlue border border-[#dedddd] rounded-md cursor-pointer">
//               Upload IC / Passport
//               <input
//                 type="file"
//                 onChange={(e) => handleFileChange(e, "uploadPassport")}
//                 className="hidden"
//                 accept=".jpg,.pdf"
//               />
//               <span className="ml-2">
//                 <GoUpload />
//               </span>
//             </label>
//             {errors.uploadPassport && (
//               <p className="text-[red] text-xs mt-1">
//                 {errors.uploadPassport.message}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="flex items-start mb-4">
//         <input
//           type="checkbox"
//           id="employeeStatement"
//           {...register('employeeStatement', { required: 'This field is required' })}
//           className="w-5 h-5 border-medium_grey rounded"
//         />
//         <label htmlFor="employeeStatement" className="ml-2 max-sm:text-[12px]">
//           I Hereby Declare that every statement made by me in this form is true and correct and I understand and agree that any false declaration made by me may be ground for termination of my contract of employment without notice.
//         </label>
//       </div>
//       {errors.employeeStatement && (
//         <p className="text-[red] text-sm">{errors.employeeStatement.message}</p>
//       )}

//       <div className="text-center my-10">
//         <button type="submit" className="primary_btn">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };
