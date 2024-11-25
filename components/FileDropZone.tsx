import { IoImagesOutline } from "react-icons/io5";


interface propsType {
    onFilesSelected: (files: FileList) => void;
}
export default function FileDropZone({ onFilesSelected }: propsType) {
    const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
    };
  
    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
      if (e.dataTransfer?.files) {
        onFilesSelected(e.dataTransfer.files);
      }
    };
  
    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        onFilesSelected(e.target.files);
      }
    };
  
    return (
        <label 
        htmlFor="upload"
        className="border-2 border-dashed z-30 border-gray-300 rounded-md px-4 py-10 flex flex-col justify-center items-center text-gray-600 !bg-white gap-6 mt-4 cursor-pointer transition"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        >
            <IoImagesOutline className="text-5xl text-gray-300"/>
            <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                    <span className="text-blue-500">{"انتخاب فایل"}</span>
                    <span>{"یا رها کردن فایل در این قسمت"}</span>
                </p>
                <p className="text-sm text-gray-400">
                    {"یک فایل انتخاب کنید تا حداکثر حجم 2MB"}
                </p>
            </div>
        <input
          id="upload"
          type="file"
          multiple
          onChange={handleFileInputChange}
          className="hidden"
        />
      </label>
    );
  }
  
