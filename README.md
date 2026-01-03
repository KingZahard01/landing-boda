# Wedding Landing Page Builder

Un sistema completo para crear sitios web de bodas personalizados. Permite a las parejas crear una landing page elegante para su boda con todas las funcionalidades esenciales.

## ✨ Características

### 🏠 Landing Page Pública
- **Hero Section**: Imagen de portada con nombres de los novios, fecha y cuenta regresiva
- **Nuestra Historia**: Sección personalizable para contar la historia de amor
- **Información del Evento**: Detalles de ceremonia, recepción y ubicación
- **Galería de Fotos**: Colección de imágenes con vista ampliada
- **RSVP**: Sistema de confirmación de asistencia con formulario inteligente
- **Mesa de Regalos**: Lista de regalos y datos bancarios para contribuciones

### ⚙️ Panel de Administración
- **Gestión de Contenido**: Editor para todos los datos de la boda
- **Vista de RSVP**: Dashboard con estadísticas de confirmaciones
- **Galería**: Gestión de imágenes con ordenamiento
- **Lista de Regalos**: Control de estado de regalos
- **Configuración**: Herramientas para compartir y previsualizar

## 🎨 Temas y Personalización

- **Tema Clásico**: Elegancia tradicional con dorados y cremas
- **Tema Botánico**: Natural y fresco con verdes y tierras
- **Tema Minimalista**: Moderno y limpio en blanco y negro

## 📱 Características Técnicas

- **Responsive Design**: Optimizado para móviles y escritorio
- **Single Page Application**: Navegación fluida sin recargas
- **Estado Global**: Gestión centralizada con React Context
- **Formularios Interactivos**: Validación en tiempo real
- **Galería Avanzada**: Vista modal y organización en cuadrícula
- **Animaciones Suaves**: Transiciones y efectos elegantes

## 🚀 Tecnologías Utilizadas

- **React 18** con TypeScript
- **Vite** para build y desarrollo
- **Tailwind CSS** para estilos
- **Context API** para gestión de estado
- **Lucide React** para iconos

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Vista previa de la build
pnpm preview
```

## 🛠️ Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── Hero.tsx         # Sección hero de la landing
│   ├── OurStory.tsx     # Historia de amor
│   ├── EventInfo.tsx    # Información del evento
│   ├── Gallery.tsx      # Galería de fotos
│   ├── RSVP.tsx         # Sistema de confirmaciones
│   ├── GiftRegistry.tsx # Mesa de regalos
│   ├── Footer.tsx       # Pie de página
│   ├── PublicLanding.tsx # Landing page completa
│   ├── AdminPanel.tsx   # Panel de administración
│   └── Navigation.tsx   # Navegación principal
├── contexts/
│   └── WeddingContext.tsx # Context global de la aplicación
├── types/
│   └── wedding.ts       # Tipos TypeScript
├── App.tsx              # Componente principal
└── index.css            # Estilos globales
```

## 🎯 Funcionalidades Detalladas

### Sistema RSVP
- Confirmación/rechazo de asistencia
- Selección de número de invitados
- Restricciones alimentarias
- Sugerencias de canciones
- Dashboard con estadísticas

### Galería de Fotos
- Carga y organización de imágenes
- Vista ampliada en modal
- Pies de foto personalizables
- Diseño tipo masonry responsivo

### Mesa de Regalos
- Lista de regalos con precios
- Enlaces a tiendas externas
- Estado de compra (comprado/disponible)
- Datos bancarios para contribuciones

### Panel de Administración
- Editor visual para todos los campos
- Vista previa del sitio
- Estadísticas en tiempo real
- Gestión de contenido sencilla

## 🌟 Características Futuras

- [ ] Sistema de autenticación
- [ ] Subida de archivos/imágenes
- [ ] Integración con redes sociales
- [ ] Más temas y personalizaciones
- [ ] Exportación de datos RSVP
- [ ] Notificaciones por email
- [ ] PWA (Progressive Web App)
- [ ] Multiidioma

## 💝 Uso

1. **Para Parejas**: Accede al panel de administración para personalizar todos los detalles de tu boda
2. **Para Invitados**: Visita la URL compartida para confirmar asistencia y ver la galería
3. **Personalización**: Cambia colores, textos e imágenes según tus preferencias

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

Desarrollado con ❤️ para hacer que cada boda sea única y memorable.