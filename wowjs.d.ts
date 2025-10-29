declare module 'wowjs' {
  export class WOW {
    constructor(config?: {
      boxClass?: string;
      animateClass?: string;
      offset?: number;
      mobile?: boolean;
      live?: boolean;
      scrollContainer?: string | null;
      resetAnimation?: boolean;
    });
    init(): void;
  }
}