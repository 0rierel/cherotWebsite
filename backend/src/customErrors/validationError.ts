class ValidationError extends Error {
    constructor(message: string, public type: string) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  export default ValidationError;
  