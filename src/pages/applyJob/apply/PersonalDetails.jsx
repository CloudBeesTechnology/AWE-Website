import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalSchema } from "../../services/Validation";
import { LuPlusSquare, LuMinusSquare } from "react-icons/lu";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { BwnIcColourDD,LanguageDD } from "./DropDownMenus";

export const PersonalDetails = () => {
  const location = useLocation();
  const applicationData = location.state?.FormData;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PersonalSchema(applicationData?.nationality)),

    defaultValues: {
      familyDetails: [{}], // Initialize with one empty family detail
      eduDetails: [{ university: "", fromDate: "", toDate: "", degree: "" }], // Initialize with one empty education detail
      workExperience: [{}], // Initialize with one empty employment detail
    },
  });
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("personalFormData"));
    if (savedData) {
      Object.keys(savedData).forEach((key) => setValue(key, savedData[key]));
    }
  }, [setValue]);
  const {
    fields: familyFields,
    append: appendFamily,
    remove: removeFamily,
  } = useFieldArray({
    control,
    name: "familyDetails",
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "eduDetails",
  });

  const {
    fields: employmentFields,
    append: appendEmployment,
    remove: removeEmployment,
  } = useFieldArray({
    control,
    name: "workExperience",
  });

  const handleAddFamily = () => {
    // Append a new empty field set with isNew flag to identify it as newly added
    appendFamily({ isNew: true });
  };
  const handleAddEducation = () => {
    // Append a new empty field set with isNew flag to identify it as newly added
    appendEducation({ isNew: true });
  };
  const handleAddEmployment = () => {
    // Append a new empty field set with isNew flag to identify it as newly added
    appendEmployment({ isNew: true });
  };

  const navigate = useNavigate();

  // const { handleNext } = useOutletContext();
  const onSubmit = (data) => {
    // const personalData = data;
    // console.log(data);
    const navigatingData = {
      ...data,
      ...applicationData,
    };
    localStorage.setItem("personalFormData", JSON.stringify(navigatingData));

    // setNavigateData(navigatingData);
    // handleNext();
    console.log(navigatingData);
    navigate("/addCandidates/educationDetails", {
      state: { FormData: navigatingData },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto py-6">
      {/* h-screen overflow-y-auto scrollbar-hide */}
      {/* Passport No and Contact No */}
      <div className="grid grid-cols-2 gap-4 mb-4 text_size_6">
      <div>
          <label className="block mb-1">Contact Number</label>
          <input
            type="text"
            {...register("contactNo")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          />
          {errors.contactNo && (
            <p className="text-[red] text-[12px]">{errors.contactNo.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Alternate Number</label>
          <input
            type="text"
            {...register("alternateNo")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]   outline-none rounded w-full"
          />
          {errors.alternateNo && (
            <p className="text-[red] text-[12px]">
              {errors.alternateNo.message}
            </p>
          )}
        </div>

      </div>

      {/* Present Address and Permanent Address */}
      <div className="grid grid-cols-2 gap-4 mb-4 text_size_6">
        <div>
          <label className="block mb-1">Present Address</label>
          <input
            type="text"
            {...register("presentAddress")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          />
          {errors.presentAddress && (
            <p className="text-[red] text-[12px]">
              {errors.presentAddress.message}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-1">Permanent Address</label>
          <input
            type="text"
            {...register("permanentAddress")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          />
          <p className="text-[red] text-[12px]">
            {errors.permanentAddress?.message}
          </p>
        </div>
      </div>

      {/* Driving License Class and Language Proficiency */}
      <div className="grid grid-cols-2 gap-4 mb-4 text_size_6">
        <div>
          <label className="block mb-1">Driving License Class</label>
          <input
            type="text"
            {...register("driveLic")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Language Proficiency</label>
          {/* <select
            {...register("lang")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          >
            <option value=""></option>
            {LanguageDD.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}
          <input
            type="text"
            {...register("lang")}
            placeholder="Ex: English, Mandarin, Malay, Other  "
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          />
          {errors.lang && (
            <p className="text-[red] text-[12px]">{errors.lang.message}</p>
          )}
        </div>
      </div>

      {/* I/C No and I/C Colour */}
      <div className="grid grid-cols-3 gap-4 mb-4 text_size_6">
        <div>
          <label className="block mb-1">Brunei I/C No</label>
          <input
            type="text"
            {...register("bwnIcNo")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          />
          {errors.bwnIcNo && (
            <p className="text-[red] text-[12px]">{errors.bwnIcNo.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Brunei I/C Colour</label>
          <select
            {...register("bwnIcColour")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          >
            <option value=""></option>
            {BwnIcColourDD.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
            {/* <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Red">Red</option> */}
          </select>
          {errors.bwnIcColour && (
            <p className="text-[red] text-[12px]">
              {errors.bwnIcColour.message}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-1">Brunei I/C Expiry</label>
          <input
            type="date"
            {...register("bwnIcExpiry")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          />
          {errors.bwnIcExpiry && (
            <p className="text-[red] text-[12px]">
              {errors.bwnIcExpiry.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4 text_size_6">
        <div>
          <label className="block mb-1">Passport Number</label>
          <input
            type="text"
            {...register("ppNo")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          />
          {errors.ppNo && (
            <p className="text-[red] text-[12px] ">{errors.ppNo.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Passport issued date</label>
          <input
            type="date"
            {...register("ppIssued")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          />
          {errors.ppIssued && (
            <p className="text-[red] text-[12px]">{errors.ppIssued.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Passport Expiry</label>
          <input
            type="date"
            {...register("ppExpiry")}
            className="mt-2 text_size_9 p-2.5  border border-[#dedddd]  outline-none rounded w-full"
          />
          {errors.ppExpiry && (
            <p className="text-[red] text-[12px]">{errors.ppExpiry.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Passport issued destination</label>
          <input
            type="text"
            {...register("ppDestinate")}
            className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded w-full"
          />
          {errors.ppDestinate && (
            <p className="text-[red] text-[12px]">
              {errors.ppDestinate.message}
            </p>
          )}
        </div>
      </div>
      {/* Family Details */}
      <div className="mb-4 relative text_size_6">
        <label className="block mb-1">
          Particulars of Immediate Family (Spouse, Children, Parents, Brothers &
          Sisters)
        </label>
        {familyFields.map((family, index) => (
          <div key={family.id} className="grid grid-cols-5 gap-4 mb-2">
            <input
              type="text"
              {...register(`familyDetails.${index}.name`)}
              placeholder="Name"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />
            <input
              type="text"
              {...register(`familyDetails.${index}.relationship`)}
              placeholder="Relationship"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />
            <input
              type="text"
              {...register(`familyDetails.${index}.age`)}
              placeholder="Age"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />
            <input
              type="text"
              {...register(`familyDetails.${index}.occupation`)}
              placeholder="Occupation"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />
            <input
              type="text"
              {...register(`familyDetails.${index}.placeOfOccupation`)}
              placeholder="Place of Occupation"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />
            {family.isNew && (
              <button
                type="button"
                onClick={() => removeFamily(index)} // Remove specific field set
                className="absolute top-15 -right-7  text-[18px]"
              >
                <LuMinusSquare /> {/* Minus icon */}
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddFamily}
          // onClick={() => appendFamily({})}
          className="absolute top-11 -right-7  text-[18px]"
        >
          <LuPlusSquare />
        </button>
      </div>

      {/* Education Details */}
      <div className="mb-4 relative text_size_6">
        <label className="block mb-1">Education Details</label>
        {educationFields.map((education, index) => (
          <div key={education.id} className="grid grid-cols-4 gap-4 mb-2">
            <Controller
              name={`eduDetails.${index}.university`}
              control={control}
              render={({ field }) => (
                <div className="flex flex-col">
                  <textarea
                    {...field}
                    placeholder="School / University / Professional Institute"
                    className="resize-none text_size_9 mt-2 p-2.5  border border-[#dedddd]  outline-none rounded"
                  />

                  {errors.eduDetails?.[index]?.university && (
                    <p className="text-[red] text-xs mt-1">
                      {errors.eduDetails[index].university.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name={`eduDetails.${index}.fromDate`}
              control={control}
              render={({ field }) => (
                <div className="flex flex-col">
                  <textarea
                    {...field}
                    type="date"
                    placeholder="From Date"
                    className="resize-none mt-2 p-2.5 text_size_9   border border-[#dedddd]  outline-none rounded"
                  ></textarea>
                  {errors.eduDetails?.[index]?.fromDate && (
                    <p className="text-[red] text-xs mt-1">
                      {errors.eduDetails[index].fromDate.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name={`eduDetails.${index}.toDate`}
              control={control}
              render={({ field }) => (
                <div className="flex flex-col">
                  <textarea
                    {...field}
                    type="date"
                    placeholder="To Date"
                    className="resize-none mt-2 p-2.5 text_size_9   border border-[#dedddd]  outline-none rounded"
                  ></textarea>
                  {errors.eduDetails?.[index]?.toDate && (
                    <p className="text-[red] text-xs mt-1">
                      {errors.eduDetails[index].toDate.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name={`eduDetails.${index}.degree`}
              control={control}
              render={({ field }) => (
                <div className="flex flex-col">
                  <textarea
                    {...field}
                    placeholder="Highest Standard / Passed / Certificate / Degree / Professional Qualification"
                    className="resize-none mt-2 p-2.5   border border-[#dedddd]  outline-none rounded text_size_9"
                  />
                  {errors.eduDetails?.[index]?.degree && (
                    <p className="text-[red] text-xs mt-1">
                      {errors.eduDetails[index].degree.message}
                    </p>
                  )}
                </div>
              )}
            />
            {education.isNew && (
              <button
                type="button"
                onClick={() => removeEducation(index)} // Remove specific field set
                className="absolute top-15 -right-7  text-[18px]"
              >
                <LuMinusSquare /> {/* Minus icon */}
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddEducation}
          // onClick={() => appendEducation({})}
          className="absolute top-12 -right-7  text-[18px]"
        >
          <LuPlusSquare />
        </button>
      </div>

      {/* Employment Details */}
      <div className="mb-4 relative text_size_6">
        <label className="block mb-1">
          Previous Employment Including Temporary Work
        </label>
        {employmentFields.map((employment, index) => (
          <div key={employment.id} className="grid grid-cols-6 gap-4 mb-2">
            <input
              type="text"
              {...register(`workExperience.${index}.name`)}
              placeholder="Name and Address"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />
            <input
              type="text"
              {...register(`workExperience.${index}.position`)}
              placeholder="Position Held"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />
            <input
              type="date"
              {...register(`workExperience.${index}.from`)}
              placeholder="From"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />
            <input
              type="date"
              {...register(`workExperience.${index}.to`)}
              placeholder="To"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />
            <input
              type="text"
              {...register(`workExperience.${index}.salary`)}
              placeholder="Salary"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />
            <input
              type="text"
              {...register(`workExperience.${index}.reasonForLeaving`)}
              placeholder="Reason for Leaving"
              className="mt-2 p-2.5 text_size_9  border border-[#dedddd]  outline-none rounded"
            />

            {employment.isNew && (
              <button
                type="button"
                onClick={() => removeEmployment(index)} // Remove specific field set
                className="absolute top-15 -right-7  text-[18px]"
              >
                <LuMinusSquare /> {/* Minus icon */}
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddEmployment}
          // onClick={() => appendEmployment({})}
          className="absolute top-11 -right-7  text-[18px]"
        >
          <LuPlusSquare />
        </button>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-12 gap-10">
        <button type="submit" className="primary_btn">
          Next
        </button>
      </div>
    </form>
  );
};
// import { useForm, useFieldArray, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { PersonalSchema } from "../../services/Validation";
// import { LuPlusSquare } from "react-icons/lu";
// import { useLocation, useNavigate} from "react-router-dom";
// import { useEffect, useState } from "react";
// import { generateClient } from "aws-amplify/api";
// // import { createPersona } from "../../graphql/mutations"; 
// const client = generateClient();

// export const PersonalDetails = () => {
//   const location = useLocation();
//   const [navigateData, setNavigateData] = useState("");
//   const applicationData = location.state?.FormData;

//   // console.log("Received form data:", applicationData);

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(PersonalSchema),
//     defaultValues: {
//       familyDetails: [{}], // Initialize with one empty family detail
//       educationDetails: [
//         { university: "", fromDate: "", toDate: "", degree: "" },
//       ], // Initialize with one empty education detail
//       workExperience: [{}], // Initialize with one empty employment detail
//     },
//   });
//   const { fields: familyFields, append: appendFamily } = useFieldArray({
//     control,
//     name: "familyDetails",
//   });

//   const { fields: educationFields, append: appendEducation } = useFieldArray({
//     control,
//     name: "educationDetails",
//   });

//   const { fields: employmentFields, append: appendEmployment } = useFieldArray({
//     control,
//     name: "workExperience",
//   });
//   const navigate = useNavigate();

//   // const { handleNext } = useOutletContext();
//   const onSubmit =  (data) => {
//     // const personalData = data;
//     // console.log(data);
//     const navigatingData = {
//       ...data,
//       ...applicationData,
//     };
//     // setNavigateData(navigatingData);
//     // handleNext();
//      navigate("/addCandidates/educationDetails", {
//       state: { FormData: navigatingData },
//     });
//     // console.log(navigatingData);
//   };
//   // const onSubmit = async (data) => {
//   //   try {

//   //     console.log(data);

//   //     // // Combine all form data
//   //     // const result = await client.graphql({
//   //     //   query: createPersona,
//   //     //   variables: {
//   //     //     input: data ,
//   //     //   },

//   //     // });
//   //     // console.log(result);

//   //     // console.log("Successfully submitted:", result);

//   //   } catch (error) {
//   //     console.log(error);

//   //     // console.error(
//   //     //   "Error submitting data to AWS:",
//   //     //   JSON.stringify(error, null, 2)
//   //     // );
//   //   } navigate("/addCandidates/personalDetails", {
//   //     state: { FormData: data },
//   //   });
//   // };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto py-6">
//       {/* h-screen overflow-y-auto scrollbar-hide */}
//       {/* Passport No and Contact No */}
//       <div className="grid sm:grid-cols-2 gap-4 mb-4 text_size_6">
//         <div>
//           <label className="block mb-1">Alternate Number</label>
//           <input
//             type="text"
//             {...register("alternateNo")}
//             className="input-field"
//           />
//           {errors.alternateNo && (
//             <p className="text-[red] text-[12px]">
//               {errors.alternateNo.message}
//             </p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-1">Contact Number</label>
//           <input
//             type="text"
//             {...register("contactNo")}
//             className="input-field"
//           />
//           {errors.contactNo && (
//             <p className="text-[red] text-[12px]">{errors.contactNo.message}</p>
//           )}
//         </div>
//       </div>

//       {/* Present Address and Permanent Address */}
//       <div className="grid sm:grid-cols-2 gap-4 mb-4 text_size_6">
//         <div>
//           <label className="block mb-1">Present Address</label>
//           <input
//             type="text"
//             {...register("presentAddress")}
//             className="input-field"
//           />
//           {errors.presentAddress && (
//             <p className="text-[red] text-[12px]">
//               {errors.presentAddress.message}
//             </p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-1">Permanent Address</label>
//           <input
//             type="text"
//             {...register("permanentAddress")}
//             className="input-field"
//           />
//           <p className="text-[red] text-[12px]">
//             {errors.permanentAddress?.message}
//           </p>
//         </div>
//       </div>

//       {/* Driving License Class and Language Proficiency */}
//       <div className="grid sm:grid-cols-2 gap-4 mb-4 text_size_6">
//         <div>
//           <label className="block mb-1">Driving License Class</label>
//           <input
//             type="text"
//             {...register("drivingLicense")}
//             className="input-field"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Language Proficiency</label>
//           <select
//             {...register("language")}
//             className="input-field"
//           >
//             <option value=""></option>
//             <option value="English">English</option>
//             <option value="Mandarin">Mandarin</option>
//             <option value="Malay">Malay</option>
//             <option value="Tamil">Tamil</option>
//             <option value="Other">Other</option>
//           </select>
//           {errors.language && (
//             <p className="text-[red] text-[12px]">{errors.language.message}</p>
//           )}
//         </div>
//       </div>

//       {/* I/C No and I/C Colour */}
//       <div className="grid sm:grid-cols-3 gap-4 mb-4 text_size_6">
//         <div>
//           <label className="block mb-1">Brunei I/C No</label>
//           <input
//             type="text"
//             {...register("icNo")}
//             className="input-field"
//           />
//           {errors.icNo && (
//             <p className="text-[red] text-[12px] ">{errors.icNo.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block mb-1">Brunei I/C Colour</label>
//           <select
//             {...register("icColour")}
//             className="input-field"
//           >
//             <option value=""></option>
//             <option value="yellow">Yellow</option>
//             <option value="green">Green</option>
//             <option value="pink">Red</option>
//           </select>
//           {errors.icColour && (
//             <p className="text-[red] text-[12px]">{errors.icColour.message}</p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-1">Brunei I/C Expiry</label>
//           <input
//             type="text"
//             {...register("icExpiry")}
//             className="input-field"
//           />
//           {errors.icExpiry && (
//             <p className="text-[red] text-[12px]">{errors.icExpiry.message}</p>
//           )}
//         </div>
//       </div>

//       <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4 text_size_6">
//         <div>
//           <label className="block mb-1">Passport Number</label>
//           <input
//             type="text"
//             {...register("passportNo")}
//             className="input-field"
//           />
//           {errors.passportNo && (
//             <p className="text-[red] text-[12px] ">
//               {errors.passportNo.message}
//             </p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-1">Passport issued date</label>
//           <input
//             type="text"
//             {...register("passportIssued")}
//             className="input-field"
//           />
//           {errors.passportIssued && (
//             <p className="text-[red] text-[12px]">
//               {errors.passportIssued.message}
//             </p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-1">Passport Expiry</label>
//           <input
//             type="text"
//             {...register("passportExpiry")}
//             className="input-field"
//           />
//           {errors.passportExpiry && (
//             <p className="text-[red] text-[12px]">
//               {errors.passportExpiry.message}
//             </p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-1">Passport issued destination</label>
//           <input
//             type="text"
//             {...register("passportDestination")}
//             className="input-field"
//           />
//           {errors.passportDestination && (
//             <p className="text-[red] text-[12px]">
//               {errors.passportDestination.message}
//             </p>
//           )}
//         </div>
//       </div>
//       {/* Family Details */}
//       <div className="mb-4 relative text_size_6">
//         <label className="block mb-1">
//           Particulars of Immediate Family (Spouse, Children, Parents, Brothers &
//           Sisters)
//         </label>
//         {familyFields.map((family, index) => (
//           <div key={family.id} className="grid sm:grid-cols-3 md:grid-cols-5 gap-4 mb-2">
//             <input
//               type="text"
//               {...register(`familyDetails.${index}.name`)}
//               placeholder="Name"
//               className="input-field"
//             />
//             <input
//               type="text"
//               {...register(`familyDetails.${index}.relationship`)}
//               placeholder="Relationship"
//               className="input-field"
//             />
//             <input
//               type="text"
//               {...register(`familyDetails.${index}.age`)}
//               placeholder="Age"
//               className="input-field"
//             />
//             <input
//               type="text"
//               {...register(`familyDetails.${index}.occupation`)}
//               placeholder="Occupation"
//               className="input-field"
//             />
//             <input
//               type="text"
//               {...register(`familyDetails.${index}.placeOfOccupation`)}
//               placeholder="Place of Occupation"
//               className="input-field"
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() => appendFamily({})}
//           className="absolute top-11 -right-7  text-[18px]"
//         >
//           <LuPlusSquare />
//         </button>
//       </div>

//       {/* Education Details */}
//       <div className="mb-4 relative text_size_6">
//         <label className="block mb-1">Education Details</label>
//         {educationFields.map((education, index) => (
//           <div key={education.id} className="grid sm:grid-cols-2 md:grid-cols-4  gap-4 mb-2">
//             <Controller
//               name={`educationDetails.${index}.university`}
//               control={control}
//               render={({ field }) => (
//                 <div className="flex flex-col">
//                   <textarea
//                     {...field}
//                     placeholder="School / University / Professional Institute"
//                     className="resize-none input-field"
//                   />

//                   {errors.educationDetails?.[index]?.university && (
//                     <p className="text-[red] text-xs mt-1">
//                       {errors.educationDetails[index].university.message}
//                     </p>
//                   )}
//                 </div>
//               )}
//             />
//             <Controller
//               name={`educationDetails.${index}.fromDate`}
//               control={control}
//               render={({ field }) => (
//                 <div className="flex flex-col">
//                   <textarea
//                     {...field}
//                     type="date"
//                     placeholder="From Date"
//                     className="resize-none input-field"
//                   ></textarea>
//                   {errors.educationDetails?.[index]?.fromDate && (
//                     <p className="text-[red] text-xs mt-1">
//                       {errors.educationDetails[index].fromDate.message}
//                     </p>
//                   )}
//                 </div>
//               )}
//             />
//             <Controller
//               name={`educationDetails.${index}.toDate`}
//               control={control}
//               render={({ field }) => (
//                 <div className="flex flex-col">
//                   <textarea
//                     {...field}
//                     type="date"
//                     placeholder="To Date"
//                     className="resize-none input-field"
//                   ></textarea>
//                   {errors.educationDetails?.[index]?.toDate && (
//                     <p className="text-[red] text-xs mt-1">
//                       {errors.educationDetails[index].toDate.message}
//                     </p>
//                   )}
//                 </div>
//               )}
//             />
//             <Controller
//               name={`educationDetails.${index}.degree`}
//               control={control}
//               render={({ field }) => (
//                 <div className="flex flex-col">
//                   <textarea
//                     {...field}
//                     placeholder="Highest Standard / Passed / Certificate / Degree / Professional Qualification"
//                     className="resize-none input-field"
//                   />
//                   {errors.educationDetails?.[index]?.degree && (
//                     <p className="text-[red] text-xs mt-1">
//                       {errors.educationDetails[index].degree.message}
//                     </p>
//                   )}
//                 </div>
//               )}
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() => appendEducation({})}
//           className="absolute top-12 -right-7  text-[18px]"
//         >
//           <LuPlusSquare />
//         </button>
//       </div>

//       {/* Employment Details */}
//       <div className="mb-4 relative text_size_6">
//         <label className="block mb-1">
//           Previous Employment Including Temporary Work
//         </label>
//         {employmentFields.map((employment, index) => (
//           <div key={employment.id} className="grid sm:grid-cols-3 md:grid-cols-6 gap-4 mb-2">
//             <input
//               type="text"
//               {...register(`workExperience.${index}.name`)}
//               placeholder="Name and Address"
//               className="input-field"
//             />
//             <input
//               type="text"
//               {...register(`workExperience.${index}.position`)}
//               placeholder="Position Held"
//               className="input-field"
//             />
//             <input
//               type="date"
//               {...register(`workExperience.${index}.from`)}
//               placeholder="From"
//               className="input-field"
//             />
//             <input
//               type="date"
//               {...register(`workExperience.${index}.to`)}
//               placeholder="To"
//               className="input-field"
//             />
//             <input
//               type="text"
//               {...register(`workExperience.${index}.salary`)}
//               placeholder="Salary"
//               className="input-field"
//             />
//             <input
//               type="text"
//               {...register(`workExperience.${index}.reasonForLeaving`)}
//               placeholder="Reason for Leaving"
//               className="input-field"
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() => appendEmployment({})}
//           className="absolute top-11 -right-7  text-[18px]"
//         >
//           <LuPlusSquare />
//         </button>
//       </div>

//       {/* Submit Button */}
//       <div className="flex justify-center mt-12 gap-10">
//         <button type="submit" className="primary_btn">
//           Next
//         </button>
//       </div>
//     </form>
//   );
// };
