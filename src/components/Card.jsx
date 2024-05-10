import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"




function Card({data, reference}) {
  return (
    <motion.div drag dragElastic={0.2} dragConstrains={reference} whileDrag={{scale:1.2}} className="relative flex-shrink-0 text-white  overflow-hidden py-10 px-8 w-60 h-72 bg-zinc-600 rounded-[20px] ">
      <IoIosSearch className=" mb-4" />
      <p>
        
        {data.name}
        <span className=" text-sm text-orange-400 inline-block">
          {data.desc}
        </span>
      </p>

      <div className=" absolute bottom-0  w-full  left-0 ">
        <div className=" mb-3 px-8 py-3 flex items-center justify-between">
          <h5> {data.filesize}</h5>
          <span className=" h-8 w-8 flex items-center justify-center rounded-full bg-zinc-700 ">
           {data.close ? <IoClose /> : <MdOutlineFileDownload size={"1em"} color="#fff" /> }
            
          </span>
        </div>

        {
            data.tag.isOpen && (<div className={`tag flex items-center justify-center w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
          <h3 className="text-md"> {data.tag.tagTitle}</h3>
        </div>)
        }

        
      </div>
    </motion.div>
  );
}

export default Card;
