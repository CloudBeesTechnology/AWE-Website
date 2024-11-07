import { getCurrentUser } from "@aws-amplify/auth";
import { uploadData } from "@aws-amplify/storage";

export const uploadDocs = async (
  file,
  fileType,
  setUploadedDocs,
  personName,
  index
) => {
  try {
    const currentUser = await getCurrentUser();
    if (currentUser) {
      const result = await uploadData({
        path: `${fileType}/${personName}/${file.name}`,
        data: file,
      }).result;
      const fileUrl = `https://aweadininstorage20242a2fe-dev.s3.ap-southeast-1.amazonaws.com/${encodeURIComponent(
        result.path
      )}`;
      //   setUploadedDocs((prev) => ({
      //     ...prev,
      //     [fileType]: fileUrl,
      //     // Dynamically set the specific field in uploadedDocs
      //   }));
      // }

      if (typeof index === "number") {
        // If updating a specific index in an array
        setUploadedDocs((prev) => ({
          ...prev,
          [`${fileType}_${index}`]: fileUrl, // Use dynamic keys to separate uploads by index
        }));
      } else {
        // If updating an object directly (non-array scenario)
        setUploadedDocs((prev) => ({
          ...prev,
          [fileType]: fileUrl,
        }));
      }
    }
  } catch (error) {
    console.log(`Error uploading ${fileType}:`, error);
  }
};
