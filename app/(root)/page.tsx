"use client"
import { useStoreModal } from "@/hooks/useStoreModal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state)=>state.onOpen);
  const isOpen = useStoreModal((state)=>state.isOpen);

  useEffect(()=>{
    if(!isOpen)
      onOpen();

  },[isOpen,onOpen]);

  return (
    <div className="p-3">
      Root page
    </div>
  )
}
export default SetupPage;