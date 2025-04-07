export interface RegisterMovie {
  idMovieDto?: number;
  titleDto: string;
  genderDto: string;
  durationMinutesDto: number;
  ratingDto: string;
  createdAtMovieDto?: string; // opcional
  updatedAtMovieDto?: string; // opcional
  posterFilenameDto?: string; // nombre del archivo (el archivo real podría subirse por separado)
}
