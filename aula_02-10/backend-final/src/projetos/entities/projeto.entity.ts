import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export type CorProjeto = 'vermelho' | 'verde' | 'azul' | 'amareco' | 'roxo';

@Entity('projetos')
export class projeto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({ type: 'text', nullable: true })
    descricao?: string;

    @Column()
    cor: CorProjeto;
}
