# (1/2) Curso REACT NATIVE para principiantes Aplicacion desde CERO con Expo

**SVGs** [1:34:00]
npx expo install react-native-svg --OK
svgr -> para optimizar svg y convertirlos en componentes de rn

**Animaciones** [1:36:20] - [1:40:14]

# (2/2) Como crear rutas dinamicas...

**Instalar tailwind (NativeWind)** [08:40]
//tailwind requiere configuracion extra para adaptarlo a la web

-> npx install nativewind@2
-> npm install --save-dev --save-exact tailwindcss@3.3.2
-> npx tailwindcss init

**Enrutado** [22:40]
-> npx expo install expo-router (react-native-screens expo-linking expo-constants) <- extras opcionales
-> package.json / "main":"expo-router/entry"
-> app.json / 'expo':{ scheme:'nombre-de-la-app-en-kebab-case' } (para el deep linking)

\_app
---- \_layout
---- \_index

import Slot en layout para renderizar el componente App dentro de index

Links href={`/${id}`} asChild

const { id } = useLocalSearchParams()

[1:06:24]

<Stack>
  <Stack.Screen name="index" options={{ headerShown: false }} />

- screenListeners (en propiedades de Stack) sirve para saber cuando el usuario cambia de pagina (x ejemplo)
  <Stack
  screenOptions={{
          headerStyle: {backgroundColor:"???"}
          ...
          }}

  > [1.10.28] Midu usa los Screens diferente (dentro de cada pagina)
  > <Screen>
  > <Stack.Screen>

**Iconos**

- npm install @expo/vector-icons

- Crear archivo Icons.jsx
- Importar iconos ahi

export const Icon? = (props) => (
<FontAwesome name="?" size={?} color="?" {...props}>
)

**Pressable animations**
<Pressable>
{({ pressed }) => ()}
</Pressable>

# AsyncStorage

-> npx expo install @react-native-async-storage/async-storage

npx expo install expo-crypto
