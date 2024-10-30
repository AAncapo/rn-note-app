export const mockupNotes = [
  {
    id: "s321ews",
    title: "Note-taking app",
    content:
      "Planificar features con cuidado para no hacer todo al berro y centrarme solo en las prioritarias\nHacer con version web en mente para poder sustituir rapido el googleKeep🤮\n\n//Design\n- Barra de filtros sticky en el top\n( sort alpha, tags, folders(archive, trash) reminders )\n- Q las todoList tengan un boton de add + al lado del titulo y uno al final?\n- Checkbox: checked/unchecked - DONE/TODO\n- boton para filtrar por tags en header al lado de buscar\n- dentro de notas filtrar por tipos de linea\n- > poner los markups mas usados en una barrita encima del teclado https://markdownguide.offshoot.io/basic-syntax/\n\n//Features\n- Font ligatures\n- drag drop una lista sobre otra y añadirla al final\n- linkear notas y lineas dentro de notas\n- al eliminar enviar al archive x 30 dias (default)\n- NOTAS DE AUDIO\n- imagenes (minigaleria)\n- Markup writing\n- Reminders & random reminders (notificaciones en momentos random, rango de tiempo definido por user)\n- Smart typing Si detecta q las 2 lineas anteriores empiezan de la misma manera. Usar ese patron como prefijo para la nueva linea\n- Busqueda de notas (palabras en notas)\n- Inline notes (allow plainText + link + img +plainText)\n- (Version control) Historial en cada nota (registrar todo lo q se borra o añade cada vez q se edita y cierra una nota)\n- Añadir calendario\n\n//Code\n- El title se asigna automaticamente usando la primera linea\n- timer based undo redo save actions\n- [Optimizar] si al press enter la linea prev y la current son plainText une ambas en una sola linea(obj)\n\n(hacer un ejemplo de links(anchors) con esto\n> Boton en la esquina derecha inf para añadir lineas (estilo twitter) al presionar se muestra lista de tipos press again -> añade plainText\n  .Cuando el user presiona ENTER se crea una linea nueva de plainText (nl/newline). para hacer saltos de linea sin crear una nueva se usa \n. El sistema no busca \n para saber donde hay una linea nueva sino el prefix {nl}\n\n\n> doble tap pa añadir otro tipo de linea\nEl tipo base es plainText asi (mas bien el base sirve pa definir lo q quieres hacer en la linea)\n\n-botones pa filtrar contenido\n\n> En checklists tienen un boton wn la esquina (upArrow) para poner como prioritaria",
    createdAt: "",
    lastModified: "",
    pinned: true,
    tags: ["web", "mobile", "projects"],
  },
  {
    id: "321sda",
    title: "EMPEZAR NOTEAPP PROYECTO RIGHT THE FUCK NAW",
    content: "Hacer nota con anotaciones del curso de TS",
    createdAt: "22:04 26/10/24",
    lastModified: "",
    pinned: false,
    tags: ["typescript"],
  },
  {
    id: "32dsad1sda",
    title: "React Native Cheats",
    content:
      "npx expo install react-native-safe-area-context\n-importar SafeAreaProvider\n-Envolver app con provider\n(Se puede usar el hook useSafeAreaInsets 'const insets = useSafe... >> paddingTop:insets.top' pero tiene varios)\n\nnpx expo install react-native-svg",
    createdAt: "13:58 27/10/24",
    lastModified: "",
    pinned: false,
    tags: ["react"],
  },

  {
    id: "dswwddgf",
    title: "PhotoMix ",
    content:
      "- gesture.Pinch para resize y rotar\n- evitar q se sigan instanciando en column (position:absolute?)\n- Añadir texto\n- añadir handle para resize en web\n\n...Draw\n...Efecto de distorsion con lupa y saturado estili dank\n\nHacer meme de fuck uci y poner a midudev\nMeme de homero con puerco /suicideboys: Tienes tantos estilos",
    createdAt: "22:04 26/10/24",
    lastModified: "",
    pinned: false,
    tags: ["typescript"],
  },
  {
    id: "321s3213213453213da",
    title: "Pc Building Playground - ThreeJs",
    content:
      "Una pagina en ThreeJs para montar pcs online y preview builds con escala de componentes real",
    createdAt: "22:04 26/10/24",
    lastModified: "",
    pinned: false,
    tags: ["typescript"],
  },
  {
    id: "321s3213213213da",
    title: "Pokemon Grump",
    content:
      "(1) Preparar todo el guion y los chistes q voy a usar de la serie de antemano\n(2) Definir que sistemas tendra (planificar codigo)\n\nUsar asset de 3D platformer",
    createdAt: "22:04 26/10/24",
    lastModified: "",
    pinned: false,
    tags: ["typescript"],
  },
];
