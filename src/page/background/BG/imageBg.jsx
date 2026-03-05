import defaultImg from '../../../assets/default.jpg'
export default function ImageBg({blogURL}) {
    
    return(
        <div className="underTaker">
            <img src={blogURL || defaultImg} alt="" />
        </div>
    )
}