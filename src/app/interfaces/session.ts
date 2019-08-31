export class Session {
  private description: string;
  private title: string;
  private id?: number;

  constructor(session: Session) {
    this.title = session.title;
    this.description = session.description;
    this.id = session.id;
  }
}
