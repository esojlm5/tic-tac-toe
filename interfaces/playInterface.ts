export interface PlayInterface {
  partidaId: string;
  estadoTablero: Array<string>;
  winner: {
    markType?: string;
    positions?: [];
  };
  siguienteMovimiento: object | null;
  historial?: Array<object>;
}
