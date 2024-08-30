import { EnlaceCreateDto } from "../domain/DTOs/EnlaceCreateDto";
import { EnlaceRepository } from "../domain/EnlaceRepository";

export class AddEnlaceUseCase {
    constructor(private repository: EnlaceRepository) {}

    async run(Enlace: EnlaceCreateDto): Promise<EnlaceCreateDto|null> {
        // Desde el procedimiento almacenado de getEnlaceByDependenciaId se aplica el
        // filtro para que solo se obtenga un enlace ACTIVO, es decir, NO ELIMINADO por dependenciaId
        // pues puede haber varios enlaces por dependencia, pero solo uno activo
        // el resto puede ser solo parte del historial y estar marcados como eliminados
        // por lo que no se deben considerar en la condicion de la creación de un nuevo enlace
        const existence = await this.repository.getEnlaceByDependenciaId(Enlace.dependenciaId);

        if (existence) {
            return new EnlaceCreateDto(
                existence.createdAt || new Date(1970, 1, 1),
                existence.nombre,
                existence.apellidoP,
                existence.apellidoM,
                existence.correo,
                existence.telefono,
                existence.estatus,
                existence.adscripcionId,
                existence.cargoId,
                existence.createdBy,
                existence.tipoPersonaId,
                existence.direccionId,
                existence.dependenciaId,
                "-1"
            );
        } else {
            return await this.repository.addEnlace(Enlace);
        }
    }
}