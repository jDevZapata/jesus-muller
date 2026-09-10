# Spec: Menú Hamburguesa Mobile

## Resumen
Agregar un botón de hamburguesa que reemplace la navegación en pantallas mobile (≤640px), mostrando un dropdown con los mismos links de navegación.

## Comportamiento

### Desktop (>640px)
- Sin cambios. Se mantiene el header actual con navegación visible.

### Mobile (≤640px)
- Se oculta la navegación actual (ya existe `display: none`)
- Aparece un botón hamburguesa (3 líneas) al lado del theme toggle
- Al tocarlo, se despliega un dropdown debajo del header con los links:
  - Experiencia
  - Tecnologías
  - Contacto
- Al tocar un link o fuera del menú, se cierra
- Transición suave de apertura/cierre

## Elementos a crear/modificar

### 1. `Header.tsx`
- Agregar estado `isOpen` con `useState`
- Agregar botón hamburguesa visible solo en mobile
- Renderizar dropdown con los links de navegación
- Cerrar menú al hacer click en un link
- Cerrar menú al hacer click fuera (useEffect con click outside)
- Agregar aria-label y aria-expanded para accesibilidad

### 2. `Header.module.css`
- Estilos del botón hamburguesa (oculto en desktop)
- Estilos del dropdown (posición absoluta debajo del header)
- Animación de apertura/cierre (transform/opacity)
- Overlay sutil de fondo
- Media query para mobile

## Estilo del botón hamburguesa
- 3 líneas horizontales con CSS (o ícono de lucide-react `Menu`/`X`)
- Tamaño consistente con el theme toggle
- Feedback visual al hacer hover

## Estilo del dropdown
- Fondo con backdrop-filter (consistente con header)
- Bordes redondeados
- Links apilados verticalmente
- Animación: slide-down + fade-in
- Cierre con click outside o Escape

## Accesibilidad
- `aria-label="Abrir menú"` / `aria-label="Cerrar menú"`
- `aria-expanded={isOpen}`
- `role="button"` en el toggle
- Focus trap dentro del menú abierto
- Cierre con tecla Escape

## Archivos afectados
- `src/app/components/header/Header.tsx`
- `src/app/components/header/Header.module.css`
