"use client";

import { FC } from "react";
import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlusIcon, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImageUpload: FC<ImageUploadProps> = ({disabled,onChange,onRemove,value}) =>{
    const [isMounted,setIsMounted] = useState<boolean>(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

  

    const onUpload = (result: any) =>{
        console.log(result);
        
        onChange(result.info.secure_url)
    }

    if(!isMounted)
        return null;

    return (
        <div className="">
            <div className="mb-4 flex items-center gap-4">
                {value.map((url)=>(
                    <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden" key={url}>
                        <div className="z-10 absolute top-2 right-2">
                            <Button type="button" onClick={()=>onRemove(url)} variant="destructive" size="icon">
                                <Trash className="w-4 h-4"/>
                            </Button>
                        </div>
                        <Image fill className="object-cover" alt="Image" src={url}/>
                    </div>
                ))}
            </div>
            <CldUploadWidget onUpload={onUpload} uploadPreset="h7trytjb">
                {({open})=>{
                    const onClick = () =>{
                        open();
                    }
                    return (
                        <Button type="button" disabled={disabled} variant="secondary" onClick={onClick}>
                            <ImagePlusIcon className="w-4 h-4 mr-2"/>
                            Upload an Image
                        </Button>
                    )
                }}
            </CldUploadWidget>
        </div>
    )
}

export default ImageUpload;