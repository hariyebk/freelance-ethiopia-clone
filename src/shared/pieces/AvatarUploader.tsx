import { useCallback, useEffect, useState } from "react"
import { FileWithPath, useDropzone } from 'react-dropzone'
interface AvatarUploaderProps{
    fieldchange: (FILES: File[]) => void;
    mediaUrl: string,
    setIsAvatar?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AvatarUploader({fieldchange, mediaUrl, setIsAvatar}: AvatarUploaderProps) {
    const [file, setFile] = useState<File[]>([])
    const [fileUrl , setFileUrl] = useState(mediaUrl)
    // when the user drags and drops, onDrop will be excuted
    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        // set the file state to dropped file
        setFile(acceptedFiles)
        fieldchange(acceptedFiles)
        setFileUrl(URL.createObjectURL(acceptedFiles[0]))
    }, [fieldchange])

    useEffect(() => {
        if(!setIsAvatar){
            return
        }
        else {
            if(file.length > 0){
                setIsAvatar(true)
            }
        }
    }, [file, setIsAvatar])

    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: {
        'image/*': ['.png', '.jpeg', '.jpg', '.svg', '.webp']
    }})
    return (
        <div className="mx-auto">
            <input {...getInputProps()} className='cursor-pointer' />
            <img {...getRootProps()} src={fileUrl}  alt='profile-image' className='w-40 h-40 ml-20 rounded-full cursor-pointer focus:outline-none' />
            <p className="text-centeer mt-6 text-sm font-palanquin"> Please make sure your photo clearly shows your face. </p>
        </div>
    )
}
