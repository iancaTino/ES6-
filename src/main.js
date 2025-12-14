const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Ana', nota: 6.0 },
    { nome: 'Carlos', nota: 5.0 },
    { nome: 'Maria', nota: 7.5 },
    { nome: 'Marcio', nota: 3.0 },
    { nome: 'Ianca', nota: 9.5 }
];

const aprovados = alunos.filter(alunos => alunos.nota >= 6);
const reprovados = alunos.filter(alunos => alunos.nota < 6);

console.log('Alunos aprovados:');
aprovados.forEach(aluno => {
    console.log(`- ${aluno.nome} | Nota: ${aluno.nota}`);
});

console.log('\nAlunos reprovados:');
reprovados.forEach(aluno => {
    console.log(`- ${aluno.nome} | Nota: ${aluno.nota}`);
});