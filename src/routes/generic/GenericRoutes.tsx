import React from "react";
import { ContainerRoutes } from "./ContainerRoutes";
import { Route, Routes } from "react-router-dom";
import { MiniDrawer } from "../../component/sidebar/MiniDrawer";
import { CheckAuthentication } from "../../middleware/checkAuthentication";
import { ClassroomProvider } from "../../context/ContextClassroom";
import { AdminRoutes } from "./AdminRoutes";

export default function GenericRoutes() {
    const [mobilemode, setMobilemode] = React.useState<boolean>()

    React.useEffect(() => {
      function handleResize() {
        // Verifica as condições de altura e largura aqui
        if (window.innerWidth < 800) {
          setMobilemode(true)
          
        } else {
          setMobilemode(false)
        }
      }
  
      // Adiciona um ouvinte de redimensionamento para chamar a função handleResize
      window.addEventListener('resize', handleResize);
  
      // Remove o ouvinte de redimensionamento quando o componente é desmontado
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // O segundo argumento vazio garante que o efeito seja executado apenas uma vez durante a montagem do componente
  
    // Restante do seu componente

  return (
    <ClassroomProvider>
      <CheckAuthentication>
          {mobilemode ? 
          <ContainerRoutes />
          :
          <MiniDrawer>
            <ContainerRoutes />
          </MiniDrawer>
        }
        </CheckAuthentication>
      </ClassroomProvider>
  );
}
