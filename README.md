"# Aplicación IONIC (Angular) - Android [Blu Bear]"
Este proyecto es una aplicación móvil desarrollada con el framework Ionic para Android. La aplicación permite a los
usuarios registrarse, iniciar sesión y explorar información detallada sobre Digimons obtenida de una API.

# Prerrequisitos

- Ionic Framework
- Angular
- Firebase
- Git
- Android Studio
- Visual sttudio code
- Node.js

# Configuración y ejecución de la aplicación

1. Clonar el repositorio de Github.
2. Navegar hasta el directorio del proyecto.
3. Ejecutar npm install para instalar las dependencias.

```terminal
npm install
```

4. Configurar el servicio de autenticación en la nube o la base de datos relacional local (especificar en el readme).
5. Ejecutar ionic serve para iniciar la aplicación.

```terminal
ionic serve
```

# Pasos generar apk

1. Ejecutar:

```terminal
ionic build --prod
```

2. Ejecutar:

```terminal
ionic capacitor add android
```

3. Ejecutar:

```terminal
ionic capacitor open android
```

4. Abrir el proyecto en Android Studio.
5. En la barra de menú superior, seleccionar Build > Build Bundle(s) / APK(s) > Build APK(s).
6. Android Studio comenzará a construir tu APK. (Puede tomar unos minutos).
7. Una vez que la construcción se haya completado, Android Studio mostrará una notificación en la esquina inferior derecha de la pantalla. Hacer clic en locate en la notificación para abrir el directorio donde se ha guardado el APK.
8. El APK debería estar en el directorio app/build/outputs/apk/debug dentro de tu proyecto.
9. Ahora puede instalar este APK en su dispositivo Android.

# Funcionalidades

1. Registro de Usuarios: Los usuarios pueden registrarse proporcionando su nombre, correo electrónico y contraseña. Se valida el correo electrónico mediante un correo de confirmación y no se permite iniciar sesión hasta que se valide el correo electrónico.
2. Inicio de Sesión: Los usuarios pueden iniciar sesión en la aplicación.
3. Vista de Grilla de Digimons: Después de iniciar sesión, los usuarios pueden ver una grilla que muestra todos los Digimons obtenidos de la API. Esta pantalla solo puede ser accedida con una sesión válida.
4. Información Detallada del Digimon: Al hacer clic en un Digimon de la grilla, se muestra otra pantalla (o pop up) con la información detallada del Digimon.

# Capturas

![Texto alternativo](https://drive.google.com/file/d/1AHrg4lzeC8okGGVXb038UDAkGLRXqu0i/view?usp=sharing)
![Texto alternativo](https://drive.google.com/file/d/1AHG4_WKPmn1WoD8vVPDn2wzTsPGlsTus/view?usp=drive_link)
![Texto alternativo](https://drive.google.com/file/d/1AFp0Qat41QH7R3TxFyCEKORifp78vbeo/view?usp=drive_link)
![Texto alternativo](https://drive.google.com/file/d/1AA5GkMwWCZ9wq7ui8cdxtqwk5mUn9dkT/view?usp=drive_link)

# Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un "Fork" del proyecto.
2. Crea una nueva rama (`git checkout -b feature/fooBar`).
3. Realiza los cambios en el código.
4. Haz commit de tus cambios (`git commit -am 'Add some fooBar'`).
5. Haz push a la rama (`git push origin feature/fooBar`).
6. Crea una nueva Pull Request.

# Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
