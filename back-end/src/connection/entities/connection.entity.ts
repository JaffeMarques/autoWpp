import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ConnectionStatus } from '../enums/connection-status.enum';

@Entity({ name: 'connections' })
export class Connection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Index()
  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'qr_code', nullable: true })
  qrCode: string;

  @Column({ nullable: true })
  session: string;

  @Column({
    type: 'enum',
    enum: ConnectionStatus,
    default: ConnectionStatus.UNINITIALIZED,
  })
  status: ConnectionStatus;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
