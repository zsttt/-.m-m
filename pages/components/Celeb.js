import Image from "next/image"
import Stack from"./Stack"


const Celeb = props => {
    return(
        <Stack>    
            <Image width ={300} height = {400} src={"/"+props.img}></Image>
            {props.name}
        </Stack>
    )
}

export default Celeb;