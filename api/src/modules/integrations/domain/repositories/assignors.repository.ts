import { Assignor } from '../entities/assignor.entity';

export abstract class AssignorsRepository {
  public abstract save(assignor: Assignor): Promise<Assignor>;
  public abstract findById(id: string): Promise<Assignor | null>;
  public abstract update(assignor: Assignor): Promise<Assignor>;
  public abstract delete(id: string): Promise<void>;
  public abstract findByEmail(email: string): Promise<Assignor | null>;
  public abstract findAll(): Promise<Assignor[]>;
}
