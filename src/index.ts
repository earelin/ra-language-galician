import { TranslationMessages } from "ra-core";

const galicianMessages: Required<TranslationMessages> = {
    ra: {
        action: {
            add_filter: "Engadir filtro",
            add: "Engadir",
            back: "Ir atrás",
            bulk_actions: "1 item seleccionado |||| %{smart_count} items seleccionados",
            cancel: "Cancelar",
            clear_array_input: "Limpar a lista",
            clear_input_value: "Limpar valor",
            clone: "Clonar",
            confirm: "Confirmar",
            create: "Crear",
            create_item: "Crear %{item}",
            delete: "Eliminar",
            edit: "Editar",
            export: "Exportar",
            list: "Listar",
            refresh: "Refrescar",
            remove_filter: "Borrar filtro",
            remove_all_filters: "Quitar todos os filtros",
            remove: "Borrar",
            save: "Gardar",
            search: "Pescudar",
            select_all: "Seleccionar todo",
            select_row: "Seleccionar esta fila",
            show: "Amosar",
            sort: "Ordear",
            undo: "Desfacer",
            unselect: "Deseleccionar",
            expand: "Expandir",
            close: "Pechar",
            open_menu: "Abrir menú",
            close_menu: "Pechar menú",
            update: "Actualizar",
            update_application: "Actualizar aplicación",
            move_up: "Mover arriba",
            move_down: "Mover abaixo",
            open:"Abrir",
            toggle_theme: "Mudar o tema",
            select_columns: "Columnas",
        },
        boolean: {
            true: "Sí",
            false: "Non",
            null: " ",
        },
        page: {
            create: "Crear %{name}",
            dashboard: "Taboleiro de instrumentos",
            edit: "%{name} #%{id}",
            error: "Algo saiu mal",
            list: "Lista de %{name}",
            loading: "Cargando",
            not_found: "No atopado",
            show: "%{name} #%{id}",
            empty: "Inda sen %{name}.",
            invite: "¿Quere engadir unha?",
        },
        input: {
            file: {
                upload_several:
                    "Arrastre alguns arquivos para subir ou faga clic para seleccionalos.",
                upload_single: "Arrastre un arquivo para subir ou faga clic para seleccionalo.",
            },
            image: {
                upload_several:
                    "Arrastre algunhas imaxes para subir ou faga clic para seleccionalas.",
                upload_single:
                    "Arrastre algunha imaxe para subir ou faga clic para seleccionala.",
            },
            references: {
                all_missing: "No se poden atopar datos de referencias.",
                many_missing:
                    "Ao menos unha das referencias asociadas parece non estar disponible.",
                single_missing: "A referencia asociada non parece estar disponible.",
            },
            password: {
                toggle_visible: "Ocultar contrasinal",
                toggle_hidden: "Amostrar contrasinal",
            },
        },
        message: {
            about: "Acerca de",
            are_you_sure: "¿Está seguro?",
            auth_error:
                "Aconteceu un erro ao validar o token de autenticación.",
            bulk_delete_content:
                "¿Seguro que quere eliminar este %{name}? |||| ¿Seguro que quere eliminar estos %{smart_count} elementos?",
            bulk_delete_title:
                "Eliminar %{name} |||| Eliminar %{smart_count} %{name} elementos",
            bulk_update_content:
                "¿Seguro que quere actualizar este %{name}? |||| ¿Seguro que quere actualizar estos %{smart_count} elementos?",
            bulk_update_title:
                "Actualizar %{name} |||| Actualizar %{smart_count} %{name} elementos",
            clear_array_input: "¿Está seguro de querer borrar toda a lista?",
            delete_content: "¿Está seguro de querer eliminar este elemento?",
            delete_title: "Eliminar %{name} #%{id}",
            details: "Detalles",
            error:
                "Produciuse un erro no cliente e a sua solicitude non se puido completar",
            invalid_form:
                "O formulario no é válido. Por favor verifique se hai erros",
            loading: "A páxina estase a cargar, espere un momento por favor",
            no: "Non",
            not_found:
                "Ou ben escribiu una URL incorrecta ou seguiu unha ligazón incorrecto.",
            yes: "Sí",
            unsaved_changes:
                "Alguns dos seus cambios no foron gardados. ¿Está seguro que querer ignoralos?",
        },
        navigation: {
            no_results: "No se atoparon resultados",
            no_more_results:
                "O número de páxina %{page} está fora dos límites. Probe a páxina anterior.",
            page_out_of_boundaries: "Número de página %{page} fora dos límites",
            page_out_from_end: "No pode ir despois da última páxina",
            page_out_from_begin: "Non pode ir antes da páxina 1",
            page_range_info: "%{offsetBegin} - %{offsetEnd} de %{total}",
            partial_page_range_info: "%{offsetBegin}-%{offsetEnd} de mas de %{offsetEnd}",
            current_page: "Páxina %{page}",
            page: "Ir ǽ páxina %{page}",
            first : "Ir á primeira páxina",
            last: "Ir á última páxina",
            next: "Seguinte",
            previous: "Ir á páxina anterior",
            page_rows_per_page: "Filas por páxina:",
            skip_nav: "Saltar ao contenido",
        },
        sort: {
            sort_by: "Ordear por %{field} %{order}",
            ASC: "ascendente",
            DESC: "descendente",
        },
        auth: {
            auth_check_error: "Por favor inicie sesión para continuar",
            user_menu: "Perfil",
            username: "Usuario",
            password: "Contrasinal",
            sign_in: "Acceder",
            sign_in_error: "A autenticación fallou, por favor, volva a intentalo",
            logout: "Pechar Sesión",
        },
        notification: {
            application_update_available: "Hai disponible unha nova versión da aplicación",
            updated: "Elemento actualizado |||| %{smart_count} elementos actualizados",
            created: "Elemento creado",
            deleted: "Elemento borrado |||| %{smart_count} elementos borrados.",
            bad_item: "Elemento incorrecto",
            item_doesnt_exist: "El elemento no existe",
            http_error: "Error de comunicación con el servidor",
            data_provider_error:
                "Error del proveedor de datos. Consulte la consola para más detalles.",
            i18n_error:
                "No se pudieron cargar las traducciones para el idioma especificado",
            canceled: "Acción cancelada",
            logged_out: "Su sesión ha finalizado, vuelva a conectarse.",
            not_authorized: "No tiene autorización para acceder a este recurso.",
        },
        validation: {
            required: "Requerido",
            minLength: "Debe conter %{min} caracteres ao menos",
            maxLength: "Debe conter %{max} caracteres o menos",
            minValue: "Debe ser ao menos %{min}",
            maxValue: "Debe ser %{max} ou menos",
            number: "Debe ser un número",
            email: "Debe ser un correo electrónico válido",
            oneOf: "Debe ser un de: %{options}",
            regex: "Debe coincidir cun formato específico (regexp): %{pattern}",
        },
        saved_queries:{
            label: "Consultas gardadas",
            query_name: "Nome da consulta",
            new_label: "Gardar a consulta actual...",
            new_dialog_title: "Gardar a consulta actual como",
            remove_label: "Eliminar a consulta gardada",
            remove_label_with_name: "Eliminar a consulta '%{name}'",
            remove_dialog_title: "¿Eliminar a consulta gardada?",
            remove_message: "¿Está seguro de querer eliminar ese elemento de tua lista de consultas gardadas?",
            help: "Filtrar a lista e gardar esta consulta para máis tarde",
        },
        configurable:{
            customize: "Personalizar",
            configureMode: "Configurar esta página",
            inspector:{
                title: "Inspector",
                content: "Pase el ratón por los elementos de la interfaz de usuario de la aplicación para configurarlos",
                reset: "Restablecer a configuración",
                hideAll: "Ocultar Todos",
                showAll: "Amosar Todos",
            },
            Datagrid: {
                title: "Taboa de Datos",
                unlabeled: "Columna #%{column} sen etiqueta",
            },
            SimpleForm: {
                title: "Formulario",
                unlabeled: "Entrada #%{input} sen etiqueta",
            },
            SimpleList:{
                title: "Lista",
                primaryText: "Texto principal",
                secondaryText: "Texto secundario",
                tertiaryText: "Texto terciario"
            },
        },
    },
};

export default galicianMessages;
