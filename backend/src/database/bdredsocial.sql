-- Table: public.registro_actividad

-- DROP TABLE public.registro_actividad;

CREATE TABLE public.registro_actividad
(
    id_registro serial NOT NULL,
    id_creador text COLLATE pg_catalog."default" NOT NULL,
    id_actividad text COLLATE pg_catalog."default" NOT NULL,
    descripcion text COLLATE pg_catalog."default",
    fecha_creacion timestamp with time zone,
    CONSTRAINT registro_actividad_pkey PRIMARY KEY (id_registro)
)

TABLESPACE pg_default;

ALTER TABLE public.registro_actividad
    OWNER to postgres;

-- Table: public.notificaciones

-- DROP TABLE public.notificaciones;

CREATE TABLE public.notificaciones
(
    id_notificacion serial NOT NULL,
    id_emisor text COLLATE pg_catalog."default" NOT NULL,
    id_receptor text COLLATE pg_catalog."default" NOT NULL,
    contenido text COLLATE pg_catalog."default",
    fecha_notificacion timestamp with time zone,
    tipo_notificacion text COLLATE pg_catalog."default",
    CONSTRAINT notificaciones_pkey PRIMARY KEY (id_notificacion)
)

TABLESPACE pg_default;

ALTER TABLE public.notificaciones
    OWNER to postgres;


-- Table: public.suma_reacciones

-- DROP TABLE public.suma_reacciones;

CREATE TABLE public.suma_reacciones
(
    id_pub_com_men text COLLATE pg_catalog."default" NOT NULL,
    me_gusta integer NOT NULL,
    me_encanta integer NOT NULL,
    me_divierte integer NOT NULL,
    me_asombra integer NOT NULL,
    me_entristece integer NOT NULL,
    me_enoja integer NOT NULL,
    CONSTRAINT reaccion_contenido_pkey PRIMARY KEY (id_pub_com_men)
)

TABLESPACE pg_default;

ALTER TABLE public.suma_reacciones
    OWNER to postgres;

-- Table: public.archivo

-- DROP TABLE public.archivo;

CREATE TABLE public.archivo
(
    id_archivo serial NOT NULL,
    id_pub_prod text COLLATE pg_catalog."default" NOT NULL,
    link_archivo text COLLATE pg_catalog."default",
    CONSTRAINT archivo_pkey PRIMARY KEY (id_archivo)
)

TABLESPACE pg_default;

ALTER TABLE public.archivo
    OWNER to postgres;

-- Table: public.reaccion

-- DROP TABLE public.reaccion;

CREATE TABLE public.reaccion
(
    id_creador text COLLATE pg_catalog."default" NOT NULL,
    id_referencia text COLLATE pg_catalog."default" NOT NULL,
    tipo_reaccion text COLLATE pg_catalog."default",
    CONSTRAINT "PK_REACCION" PRIMARY KEY (id_creador, id_referencia)
)

TABLESPACE pg_default;

ALTER TABLE public.reaccion
    OWNER to postgres;

-- Table: public.pagina_grupo

-- DROP TABLE public.pagina_grupo;

CREATE TABLE public.pagina_grupo
(
    id_pagina_grupo text COLLATE pg_catalog."default" NOT NULL,
    id_creador text COLLATE pg_catalog."default" NOT NULL,
    nombre text COLLATE pg_catalog."default",
    categoria text COLLATE pg_catalog."default",
    link_portada text COLLATE pg_catalog."default",
    link_perfil text COLLATE pg_catalog."default",
    descripcion text COLLATE pg_catalog."default",
    fecha_creacion timestamp with time zone,
    total_me_gusta integer,
    total_seguidores integer,
    total_visitas integer,
    visibilidad text COLLATE pg_catalog."default",
    CONSTRAINT pagina_grupo_pkey PRIMARY KEY (id_pagina_grupo)
)

TABLESPACE pg_default;

ALTER TABLE public.pagina_grupo
    OWNER to postgres;

-- Table: public.seguidor_pagina_grupo

-- DROP TABLE public.seguidor_pagina_grupo;

CREATE TABLE public.seguidor_pagina_grupo
(
    id_seguido text COLLATE pg_catalog."default" NOT NULL,
    id_seguidor text COLLATE pg_catalog."default" NOT NULL,
    es_seguido boolean,
    es_me_gusta boolean,
    tipo_relacion text COLLATE pg_catalog."default",
    CONSTRAINT "PK_SEGUIDO_SEGUIDOR" PRIMARY KEY (id_seguido, id_seguidor)
)

TABLESPACE pg_default;

ALTER TABLE public.seguidor_pagina_grupo
    OWNER to postgres;
-- Table: public.usuario

-- DROP TABLE public.usuario;

CREATE TABLE public.usuario
(
    id_usuario text COLLATE pg_catalog."default" NOT NULL,
    nombre text COLLATE pg_catalog."default",
    apellido text COLLATE pg_catalog."default",
    celular text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    clave text COLLATE pg_catalog."default",
    es_activo boolean,
    cod_recuperacion text COLLATE pg_catalog."default",
    cod_verificacion text COLLATE pg_catalog."default",
    fecha_creacion timestamp with time zone,
    ultima_conexion timestamp with time zone,
    CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario)
)

TABLESPACE pg_default;

ALTER TABLE public.usuario
    OWNER to postgres;

-- Table: public.categoria

-- DROP TABLE public.categoria;

CREATE TABLE public.categoria
(
    id_categoria text COLLATE pg_catalog."default" NOT NULL,
    nombre_categoria text COLLATE pg_catalog."default",
    CONSTRAINT categoria_pkey PRIMARY KEY (id_categoria)
)

TABLESPACE pg_default;

ALTER TABLE public.categoria
    OWNER to postgres;

-- Table: public.chat

-- DROP TABLE public.chat;

CREATE TABLE public.chat
(
    id_chat serial not null,
    id_admin text COLLATE pg_catalog."default",
    nombre_chat text COLLATE pg_catalog."default",
    CONSTRAINT chat_pkey PRIMARY KEY (id_chat),
    CONSTRAINT "FK_ADMIN" FOREIGN KEY (id_admin)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.chat
    OWNER to postgres;

-- Table: public.publicacion

-- DROP TABLE public.publicacion;

CREATE TABLE public.publicacion
(
    id_publicacion text COLLATE pg_catalog."default" NOT NULL,
    id_creador text COLLATE pg_catalog."default" NOT NULL,
    fecha_creacion timestamp with time zone,
    fecha_finalizacion timestamp with time zone,
    contenido text COLLATE pg_catalog."default",
    visibilidad text COLLATE pg_catalog."default",
    es_historia boolean,
    es_noticia boolean,
    tipo_publicacion text COLLATE pg_catalog."default",
    CONSTRAINT publicacion_pkey PRIMARY KEY (id_publicacion)
)

TABLESPACE pg_default;

ALTER TABLE public.publicacion
    OWNER to postgres;

-- Table: public.comentario

-- DROP TABLE public.comentario;

CREATE TABLE public.comentario
(
    id_comentario serial NOT NULL,
    id_publicacion text COLLATE pg_catalog."default" NOT NULL,
    id_creador text COLLATE pg_catalog."default" NOT NULL,
    comentario text COLLATE pg_catalog."default",
    fecha_creado timestamp with time zone,
    fecha_editado timestamp with time zone,
    id_padre integer,
    link_file text COLLATE pg_catalog."default",
    CONSTRAINT comentario_pkey PRIMARY KEY (id_comentario),
    CONSTRAINT "FK_PADRE" FOREIGN KEY (id_padre)
        REFERENCES public.comentario (id_comentario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "FK_PUBLICACION" FOREIGN KEY (id_publicacion)
        REFERENCES public.publicacion (id_publicacion) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.comentario
    OWNER to postgres;

-- Table: public.etiqueta

-- DROP TABLE public.etiqueta;

CREATE TABLE public.etiqueta
(
    id_publicacion text COLLATE pg_catalog."default" NOT NULL,
    id_etiquetado text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_etiqueta" PRIMARY KEY (id_publicacion, id_etiquetado),
    CONSTRAINT "FK_PUBLICACION" FOREIGN KEY (id_publicacion)
        REFERENCES public.publicacion (id_publicacion) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.etiqueta
    OWNER to postgres;

-- Table: public.amistad

-- DROP TABLE public.amistad;

CREATE TABLE public.amistad
(
    id_emisor text COLLATE pg_catalog."default" NOT NULL,
    id_receptor text COLLATE pg_catalog."default" NOT NULL,
    es_aceptada boolean,
    fecha_emision timestamp with time zone,
    fecha_aceptacion timestamp with time zone,
    es_seguido boolean,
    es_seguidor boolean,
    esta_bloqueado boolean,
    CONSTRAINT "PK_AMISTAD" PRIMARY KEY (id_emisor, id_receptor),
    CONSTRAINT "FK_EMISOR" FOREIGN KEY (id_emisor)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_RECEPTOR" FOREIGN KEY (id_emisor)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.amistad
    OWNER to postgres;


-- Table: public.guardado

-- DROP TABLE public.guardado;

CREATE TABLE public.guardado
(
    id_usuario text COLLATE pg_catalog."default" NOT NULL,
    id_guardado text COLLATE pg_catalog."default" NOT NULL,
    fecha_guardado timestamp with time zone,
    CONSTRAINT "ID_GUARDADO" PRIMARY KEY (id_usuario, id_guardado),
    CONSTRAINT "FK_USUARIO_GUARDA" FOREIGN KEY (id_usuario)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.guardado
    OWNER to postgres;

-- Table: public.perfil

-- DROP TABLE public.perfil;

CREATE TABLE public.perfil
(
    id_usuario text COLLATE pg_catalog."default" NOT NULL,
    fecha_nac date,
    genero text COLLATE pg_catalog."default",
    alias text COLLATE pg_catalog."default",
    link_portada text COLLATE pg_catalog."default",
    link_perfil text COLLATE pg_catalog."default",
    descripcion text COLLATE pg_catalog."default",
    total_amigos integer,
    total_seguidores integer,
    total_seguidos integer,
    total_publicaciones integer,
    CONSTRAINT perfil_pkey PRIMARY KEY (id_usuario),
    CONSTRAINT "FK_USUARIO_PERFIL" FOREIGN KEY (id_usuario)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.perfil
    OWNER to postgres;

-- Table: public.usuario_pagina_grupo

-- DROP TABLE public.usuario_pagina_grupo;

CREATE TABLE public.usuario_pagina_grupo
(
    id_usuario text COLLATE pg_catalog."default" NOT NULL,
    id_pagina_grupo text COLLATE pg_catalog."default" NOT NULL,
    fecha_afiliacion timestamp with time zone,
    es_acceptado boolean NOT NULL,
    tipo_usuario text COLLATE pg_catalog."default",
    esta_bloqueado boolean,
    CONSTRAINT "PK_USUARIO_PERTENECE_PAGINA_GRUPO" PRIMARY KEY (id_usuario, id_pagina_grupo),
    CONSTRAINT "FK_USUARIO_PERTENECE_PAGINA_GRUPO" FOREIGN KEY (id_usuario)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.usuario_pagina_grupo
    OWNER to postgres;

-- Table: public.producto

-- DROP TABLE public.producto;

CREATE TABLE public.producto
(
    id_producto text COLLATE pg_catalog."default" NOT NULL,
    nombre text COLLATE pg_catalog."default",
    precio double precision,
    ciudad text COLLATE pg_catalog."default",
    id_categoria text COLLATE pg_catalog."default",
    descripcion text COLLATE pg_catalog."default",
    id_vendedor text COLLATE pg_catalog."default",
    CONSTRAINT producto_pkey PRIMARY KEY (id_producto),
    CONSTRAINT "FK_CATEGORIA" FOREIGN KEY (id_categoria)
        REFERENCES public.categoria (id_categoria) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "FK_VENDEDOR" FOREIGN KEY (id_vendedor)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.producto
    OWNER to postgres;

-- Table: public.venta

-- DROP TABLE public.venta;

CREATE TABLE public.venta
(
    id_venta serial NOT NULL,
    id_producto text COLLATE pg_catalog."default" NOT NULL,
    id_comprador text COLLATE pg_catalog."default" NOT NULL,
    fecha_venta timestamp with time zone,
    CONSTRAINT venta_pkey PRIMARY KEY (id_venta),
    CONSTRAINT "FK_COMPRADOR" FOREIGN KEY (id_comprador)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_PRODUCTO" FOREIGN KEY (id_producto)
        REFERENCES public.producto (id_producto) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.venta
    OWNER to postgres;

-- Table: public.evento

-- DROP TABLE public.evento;

CREATE TABLE public.evento
(
    id_evento text COLLATE pg_catalog."default" NOT NULL,
    link_logo text COLLATE pg_catalog."default",
    link_portada text COLLATE pg_catalog."default",
    nombre_evento text COLLATE pg_catalog."default",
    id_categoria text COLLATE pg_catalog."default",
    fecha_creacion timestamp with time zone,
    fecha_evento timestamp with time zone,
    descripcion text COLLATE pg_catalog."default",
    id_creador text COLLATE pg_catalog."default",
    CONSTRAINT evento_pkey PRIMARY KEY (id_evento),
    CONSTRAINT "FK_CATEGORIA_EVENTO" FOREIGN KEY (id_categoria)
        REFERENCES public.categoria (id_categoria) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_CREADOR_EVENTO" FOREIGN KEY (id_creador)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.evento
    OWNER to postgres;

-- Table: public.miembro_evento

-- DROP TABLE public.miembro_evento;

CREATE TABLE public.miembro_evento
(
    id_evento text COLLATE pg_catalog."default" NOT NULL,
    id_miembro text COLLATE pg_catalog."default" NOT NULL,
    tipo_miembro text COLLATE pg_catalog."default",
    opciones text COLLATE pg_catalog."default",
    CONSTRAINT "PK_MIEMBRO_EVENTO" PRIMARY KEY (id_evento, id_miembro),
    CONSTRAINT "FK_EVENTO" FOREIGN KEY (id_evento)
        REFERENCES public.evento (id_evento) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_MIEMBRO" FOREIGN KEY (id_miembro)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.miembro_evento
    OWNER to postgres;

-- Table: public.usuario_chat

-- DROP TABLE public.usuario_chat;

CREATE TABLE public.usuario_chat
(
    id_chat serial NOT NULL,
    id_usuario text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_USUARIO_CHAT" PRIMARY KEY (id_chat, id_usuario),
    CONSTRAINT "FK_CHAT" FOREIGN KEY (id_chat)
        REFERENCES public.chat (id_chat) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "FK_USUARIO" FOREIGN KEY (id_usuario)
        REFERENCES public.usuario (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.usuario_chat
    OWNER to postgres;

-- Table: public.mensaje

-- DROP TABLE public.mensaje;

CREATE TABLE public.mensaje
(
    id_mensaje serial NOT NULL,
    id_emisor text COLLATE pg_catalog."default" NOT NULL,
    id_chat integer NOT NULL,
    mensaje text COLLATE pg_catalog."default",
    fecha_envio timestamp with time zone,
    link_file text COLLATE pg_catalog."default",
    CONSTRAINT mensaje_pkey PRIMARY KEY (id_mensaje),
    CONSTRAINT "FK_CHAT" FOREIGN KEY (id_chat)
        REFERENCES public.chat (id_chat) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.mensaje
    OWNER to postgres;

