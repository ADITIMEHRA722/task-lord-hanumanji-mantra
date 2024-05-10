
import Card from './Card';
import { useRef } from 'react';

function Foreground() {

    const ref = useRef(null)

    const data=[
        {
           name: "हं हनुमंते नम:।",
            desc: "भय नाश करने के लिए हनुमान मंत्र", 
            filesize: ".9mb",
            close: false, 
            tag: {
                isOpen: true, tagTitle: "Download Now", 
                tagColor: "green"
            }

        },

        {
            name: "नासै रोग हरे सब पीरा, जपत निरंतर हनुमत बीरा",
             desc: "स्वास्थ्य के लिए", 
             filesize: ".9mb",
             close: true, 
             tag: {
                 isOpen: false, tagTitle: "Download Now", 
                 tagColor: "green"
             }
 
         },

         {
            name: "ॐ नमो हनुमते रूद्रावताराय सर्वशत्रुसंहारणाय सर्वरोग हराय सर्ववशीकरणाय रामदूताय स्वाहा।",
             desc: "संकट दूर करने का मंत्र", 
             filesize: ".9mb",
             close: true, 
             tag: {
                 isOpen: false, tagTitle: "Download Now", 
                 tagColor: "green"
             }
 
         },

         {
            name: "ॐ नमो हनुमते आवेशाय आवेशाय स्वाहा।।",
             desc: "कर्ज मुक्ति के मंत्र ", 
             filesize: ".9mb",
             close: true, 
             tag: {
                 isOpen: true, tagTitle: "Download Now", 
                 tagColor: "green"
             }
 
         }
    ];
   
  return (
    <div ref={ref} className=" flex gap-10 justify-between items-center flex-wrap fixed top-0 left-0  z-[3] w-full h-full p-4 ">
     

      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground