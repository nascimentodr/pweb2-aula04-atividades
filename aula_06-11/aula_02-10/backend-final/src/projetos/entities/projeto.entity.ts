import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export type CorProjeto = 'vermelho' | 'verde' | 'azul' | 'amarelo' | 'roxo';

@Entity('projetos')
export class Projeto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({ type: 'text', nullable: true })
    descricao?: string;

    @Column()
    cor: CorProjeto;
}
