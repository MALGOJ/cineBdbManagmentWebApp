
export interface Movie {
  idMovieDto: number;
  titleDto: string;
  genderDto: string;
  durationMinutesDto: number;
  ratingDto: string;
  createdAtMovieDto?: Date;
  updatedAtMovieDto?: Date;
  posterFilenameDto: string;
}
