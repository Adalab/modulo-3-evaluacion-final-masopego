## Rick and Morty Search 🛸 🛸 by [masopego](https://masopego.es/)

En este proyecto podrás encontrar una SPA desarrollada en react. La web contiene un listado de personajes de la serie _Rick and Morty_. Además de un filtro de personajes y una _card_ para ver más detalles de cada uno de los personajes.

#### Elementos adicionales:

- Landing _Rick and Morty_
- Loading page
- 404 page

#### Requisitos de la web:

### Listado de personajes

Utilizar el servicio [https://rickandmortyapi.com/documentation/#get-all-characters](https://rickandmortyapi.com/documentation/#get-all-characters) que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar:

- Foto
- Nombre
- Especie

Si este servicio no funcionase (porque nos hubieran baneado) tenemos una url de backup: [https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json](https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json)

### Filtrado de personajes

Buscar a los personajes con nombre. Para eso, añadimos un **input** a la interfaz, de forma que al ir escribiendo un nombre queden en la
interfaz solo los personajes cuyo nombre contiene las letras escritas. Además, los personajes están **ordenados alfabéticamente**.

### Estructura de componentes

Empleamos una estructura basada en el concepto **Atomic Web Design**, que permite descomponer problemas para darles una mejor solución, creando, así, un sistema de componentes.

Este concepto, acuñado por el (Brad Frost)[https://bradfrost.com/blog/post/atomic-web-design/], permite descomponer la aplición en **5 grados de componentes**: Átomos, Moléculas, Organismos, Templates y Páginas.

### Detalle del personaje

Al hacer clic sobre la tarjeta de un personaje, su informaciónaparecerá a pantalla completa. Para hacer esto usaremos rutas y **React router**. En la pantalla de detalleaparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los queaparece y si está vivo o muerto.

### URL compartible

La URL del detalle de personaje debe ser compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
En el caso de que el usuario navegue a una URL inexistente, debemos mostrar un mensaje del tipo "El personaje que buscas no existe".
