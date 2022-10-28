export interface PlayInterface {
  partidaId: string;
  estadoTablero: Array<string>;
  winner:
    | {
        markType?: string;
      }
    | true;
  siguienteMovimiento: object | null;
  historial: Array<object>;
}
