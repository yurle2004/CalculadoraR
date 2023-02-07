
import { useState } from "react";

const Calculadora =()=>{
   
    const [Resul, setResul]= useState(0);
    const [Pantalla , setPantalla]= useState(0);
    const [ Pantalla2, setPantalla2]= useState(0);
    const Boton_y =(e)=>{
    
       
        if(Pantalla ==0 )
        { setPantalla(e.target.value)

        }else{ setPantalla(Pantalla+e.target.value)
        }

     }

    const Boton_n=(props)=>{
        return(
            <input type="button" value={props.value} onClick={Boton_y}/>
        )
        }
    const Boton_a=(props)=>{
            return(
            <input type="button" value={props.value}onClick={Boton_g}/>
            )
        }
        const Boton_i=(props)=>{
            return(
            <input type="button" value={props.value}onClick={Boton_l}/>
            )
        }
    const Boton_g=(e)=>{
        setPantalla2(Pantalla)
        setPantalla(0);

        setResul(e.target.value)

    
    }
    const Boton_l=()=>{

        if(Resul=="+" )
        { setPantalla(parseInt(Pantalla) + parseInt(Pantalla2) )
        }
        if(Resul=="-" )
        { setPantalla(parseInt(Pantalla) - parseInt(Pantalla2) )
        }
        if(Resul=="*" )
        { setPantalla(parseInt(Pantalla) * parseInt(Pantalla2) )
        }
        if(Resul=="/" )
        { setPantalla(parseInt(Pantalla2) / parseInt(Pantalla) )
        }
    
    }

    


    return(
        <div className="calculadora">
       <form action="#" name="calculadora" id="calculadora">
       <p>{Pantalla}</p>
       <p>
       <input type="button" className="largo" value="Retr" onclick="retro()"   />
       <input type="button" className="largo" value="CE" onclick="borradoParcial()"  />
       <input type="button" className="largo" value="C" onclick="borradoTotal()"  />
       </p>
       <p>
       <Boton_n value="7" />
       <Boton_n value="8" />
       <Boton_n value="9" />
       <Boton_a value="-" />
       <Boton_a value="/" />
       </p>
       <p>
       
       <Boton_n value="4" />
       <Boton_n value="5" />
       <Boton_n value="6" />
       <Boton_a value="*" />
       </p>
       <p>
       <Boton_n value="1" />
       <Boton_n value="2" />
       <Boton_n value="3" />
       
       </p>
       <p>
       <Boton_n value="0 " />
       <Boton_a value=". " />
       <Boton_a value="+" />
       <Boton_i value="= " />
       
       </p>
       </form>
       </div>
        
        )

}

export default Calculadora