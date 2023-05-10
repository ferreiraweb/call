import { styled } from "@/styles"



const Button = styled('button', {
    backgroundColor: "$green300",
    color: "$white",
    padding: '1rem 3rem',
    border: '0',
    borderRadius: '4px',
    fontWeight: 'bold'
})


export default function Test() {
    return (
        <Button>Enviar</Button>
    )
}