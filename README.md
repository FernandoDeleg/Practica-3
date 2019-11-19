# Practica-3

 	FORMATO DE INFORME DE PRÁCTICA DE LABORATORIO / TALLERES / CENTROS DE SIMULACIÓN – PARA ESTUDIANTES

CARRERA: INGENIERIA DE SISTEMAS/COMPUTACION	ASIGNATURA: HYPERMEDIAL
NRO. PRÁCTICA:	3	TÍTULO PRÁCTICA: Resolución de problemas sobre JavaScript
OBJETIVO ALCANZADO:
• Entender y organizar de una mejor manera los sitios de web en Internet
• Diseñar adecuadamente elementos gráficos en sitios web en Internet.
• Crear sitios web aplicando estándares actuales.

ACTIVIDADES DESARROLLADAS
A.	Desarrollo de los puntos:
Como punto inicial tenemos una carpeta en donde tendremos la página principal index.html, además de que tendremos la carpeta formularia en donde encontraremos los archivos para realizar el formulario y sus validaciones conjuntamente.

 

En el archivo index.html tenemos la creación de los campos cedula, nombres, apellidos, dirección, teléfono, fechaNacimiento, correo, contraseña como se ve en la imagen:

 

El archivo para hacer las validaciones esta realizado en JavaScript en el cual se realiza todas las siguientes validaciones:

a.	Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador.

Con la función validar realizamos la validación de la cedula mediante el siguiente código:

![image](https://user-images.githubusercontent.com/56567621/69171370-c9e2a700-0ac9-11ea-8445-ac43a0c8cd38.png)
 
b.	Se debe validar qué, en el campo del nombre, ingrese mínimo un nombre y que permita ingresar sólo letras. 
c.	Se debe validar qué, en el campo del apellido, ingrese mínimo un apellido y que permita ingresar sólo letras.
Para la validación de ambos campos Nombre y apellido se hace mediante la creación de una función soloLetras para que nos permita ingresar solamente letras.


![image](https://user-images.githubusercontent.com/56567621/69171496-13cb8d00-0aca-11ea-9c0b-572cf93c938b.png)

 
Para validar el nombre utilizamos la función nombre():

![image](https://user-images.githubusercontent.com/56567621/69171527-23e36c80-0aca-11ea-95a2-e54fc9c751f4.png)
 
Para validar el apellido utilizamos la función apellido() en donde validamos que se ingrese los dos apellidos de la persona :
 
![image](https://user-images.githubusercontent.com/56567621/69171562-39589680-0aca-11ea-80dd-9459b0c9beb6.png)


d.	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10.

En la pagina de index realizamos la validación para que tenga un máximo de 10 carateres es decir que solo se pueda ingresar un numero de máximo 10 dígitos.
 
![image](https://user-images.githubusercontent.com/56567621/69171613-4d03fd00-0aca-11ea-94ad-36c323f1e02f.png)

e.	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.
Para realizar esta validación hacemos mediante la función fecha():
 
 ![image](https://user-images.githubusercontent.com/56567621/69171666-62792700-0aca-11ea-8871-1029ff48ebbc.png)


f.	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec”

Para ello hacemos la siguiente validación en la función validarEmail():
 
![image](https://user-images.githubusercontent.com/56567621/69171686-6c028f00-0aca-11ea-964d-7b718183ab22.png)

g. Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra mayúscula, una letra minúscula y un carácter especial (@, _, $)
para esta validación lo hacemos de la siguiente manera:
 
![image](https://user-images.githubusercontent.com/56567621/69171721-7b81d800-0aca-11ea-995d-2d9829ac3ba5.png)


Parte dos: 

2. Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. 

Para esta practica creamos otra carpeta llamada Galeria en donde tenemos los archivos función.js, index.css, index.html y por último una carpeta para las imágenes llamada images para guardar ahí las 10 imágenes.

En el archivo index.html creamos la interfaz y botones que se pide en el enunciado para poder visualizar las imágenes.
 

![image](https://user-images.githubusercontent.com/56567621/69171762-8ccae480-0aca-11ea-93ae-f0123574d149.png)

En el archivo función.js hacemos un arreglo para poder obtener 5 imágenes aleatorias de las 10 que debemos tener dentro de la carpeta images.
 ![image](https://user-images.githubusercontent.com/56567621/69171784-994f3d00-0aca-11ea-97ab-7f87b06c7339.png)

Por ultimo en el archivo index.css realizamos los estilos que tiene la pagina:
   ![image](https://user-images.githubusercontent.com/56567621/69171810-a66c2c00-0aca-11ea-9737-83953df5f639.png)
   
   
   
   ![image](https://user-images.githubusercontent.com/56567621/69171816-a8ce8600-0aca-11ea-9ee4-3d6248fdad7d.png)




CONCLUSIONES: 
Para esta práctica podemos realizamos las validaciones que se deben hacer para poder hacer un formulario el cual por el momento solo valida que se ingrese de una forma correcta en la página y si esta todo correcto nos enviara una página que dice “Bienvenido, pasaste las validaciones”.

Para la segunda parte se recomienda que se coloquen imágenes del mismo tamaño para no tener problemas en la realización de la práctica.



Nombres del estudiante:  Fernando Deleg

 
Firma del estudiante

