import { useEffect, useRef, useState } from "react"
import {motion, scale} from 'framer-motion';
import {toast} from 'react-toastify';
import {useDropzone} from 'react-dropzone';
import {Upload} from 'lucide-react';
export default function HandleVidoe() {
    const [vidoe,setVideo] = useState({
        objUrl:"",
        file:null
    });

    const videoElRef = useRef(null);

    const onDrop = (acceptedFiles) => {
        let file = acceptedFiles[0]
        if (!file) return toast.info("No! video selcted");
        const maxSize = 100 * 1024 * 1024;
        if (file.size > maxSize) {
            return toast.info("File size will be < 100MB");
        }
        console.log("here")
        setVideo({
            objUrl: URL.createObjectURL(file),
            file:file
        })
       // videoElRef.current.value = ""
    }

    const {getRootProps,getInputProps,isDragActive} = useDropzone({
        onDrop,
        multiple:false,
        maxSize: 100 * 1024 * 1024
    })

    useEffect(()=>{
        console.log(vidoe)
    },[vidoe])

    return(
        <div className="h-6/10 w-5/10 flex items-center justify-center absolute left-1/4
        bg-black/20 backdrop-blur-2xl rounded-lg top-1/5
        ">
            {vidoe.file === null ? <div className="notVidoe h-8/10 w-8/10 blurBg flex relative items-start justify-center p-2">
                <motion.div
                    {...getRootProps()}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`border-2 flex flex-col items-center border-dashed rounded-2xl p-10 w-full max-w-xl cursor-pointer text-center transition-all duration-300
                        ${
                        isDragActive
                            ? "border-cyan-400/80 bg-black/40 shadow-[0_0_25px_-8px_rgba(6,182,212,0.6)]"
                            : "border-gray-700 bg-[#000000a5] hover:border-cyan-400/40 hover:bg-black/80"
                        }`}
                    >
                    <input {...getInputProps()} accept="video/*" />

                    <motion.div
                        animate={{ y: isDragActive ? -6 : 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <Upload className="text-cyan-400 w-full h-40 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                        <p className="text-gray-300 text-lg font-medium">
                        {isDragActive
                            ? "Drop files here"
                            : "Drag & drop or click to browse"}
                        </p>
                        <p className="text-sm text-gray-500">Max 100MB</p>
                    </motion.div>
                </motion.div>
                
            </div> : 
            
            <div className="afterSelected h-8/10 w-9/10 p-2 relative">
                <video className="h-full w-full rounded-lg object-cover z-1!" autoPlay muted loop>
                    <source type="video/mp4" src={vidoe?.objUrl} />
                </video>
                <div className="miniController z-2! h-5 w-8 rounded-lg btn
                absolute bottom-0 right-0">

                </div>
            </div>}
        </div>
    )
}