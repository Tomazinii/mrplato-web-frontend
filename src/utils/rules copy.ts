export interface PredicateRule {
  id: string;
  name: string;
  method: string;
}

export interface InferenceRule {
  id: string;
  name: string;
  method: string;
}

export interface EquivalenceRule {
  id: string;
  name: string;
  method: string;
}


export const Rules = {
  predicate: [
    {
      id: "ID01",
      name: "generalização universal",
      method: "p(a) = ∀xp(x)",
    },

    {
      id: "ID02",
      name: "Generalização Existencial:",
      method: "p(a) ⇒ ∃xp(x) ",
    },
    {
      id: "ID03",
      name: "Particulação Universal",
      method: "∀xp(x) ⇒ p(a) ",
    },
    {
      id: "ID04",
      name: "Particularização Existencia",
      method: "∃xp(x) ⇒ p(a) ",
    },
    {
      id: "ID05",
      name: "De Morgan Universal:",
      method: " -∀xp(x) ⇒ x~p(x) ",
    },
    {
      id: "ID06",
      name: "De Morgan Universal:",
      method: "∃x-p(x) ⇒ ~xp(x)",
    },
    {
      id: "ID07",
      name: "De Morgan Existencial:",
      method: "~∃xp(x) ⇒ ∀x~p(x)",
    },
    {
      id: "ID08",
      name: "De Morgan Existencial:",
      method: "∀x~~p(x) ⇒ ~∃xp(x)",
    },
  ] as PredicateRule[],
  inference: [
    {
      id: "ID09",
      name: "Ad. Hipótese",
      method: "p ⇒ p",
    },
    {
      id: "ID010",
      name: "Rem. Hipótese",
      method: "p ⇒ p → q",
    },
    {
      id: "ID011",
      name: "Red. Absurdo",
      method: "p ⇒ ∼p",
    },
    {
      id: "ID012",
      name: "Absorção",
      method: "p → q ⇒ p → (p → q)",
    },
    {
      id: "ID013",
      name: "Adição_1",
      method: "p ⇒ p ∨ q",
    },
    {
      id: "ID014",
      name: "Adição_2",
      method: "p ⇒ q ∨ p",
    },
    {
      id: "ID015",
      name: "Conjunção_1",
      method: "p, q ⇒ p ∧ q",
    },
    {
      id: "ID016",
      name: "Conjunção_2",
      method: "p, q ⇒ q ∧ p",
    },
    {
      id: "ID017",
      name: "Dil. constr.",
      method: "p → q, r → s, p ∨ r ⇒ q ∨ s",
    },
    {
      id: "ID01233",
      name: "Dil. destr.",
      method: "p → q, r → s, ∼q ∨ ∼s ⇒ ∼p ∨ ∼r",
    },
    {
      id: "ID0182",
      name: "Modus ponens",
      method: "p → q, p ⇒ q",
    },
    {
      id: "ID0184",
      name: "Modus tollens",
      method: "p → q, ∼q ⇒ ∼p",
    },
    {
      id: "ID022410",
      name: "Sil. disj._1",
      method: "p ∨ q, ∼p ⇒ q",
    },
    {
      id: "ID021",
      name: "Sil. disj._2",
      method: "p ∨ q, ∼q ⇒ p",
    },
    {
      id: "ID021422",
      name: "Sil. hipot",
      method: "p → q, q → r ⇒ p → r",
    },
    {
      id: "ID022143",
      name: "Simplificação_1",
      method: "p ∧ q ⇒ p",
    },
    {
      id: "ID024",
      name: "Simplificação_2",
      method: "p ∧ q ⇒ q",
    },
  ] as InferenceRule[],
  equivalence: [
    {
      id: "ID022345",
      name: "Absorção_cd",
      method: "p → (p ∧ q) ⇔ p → q",
    },
    {
      id: "ID026",
      name: "Absorção_cd",
      method: "p → q ⇔ p → (p ∧ q)",
    },
    {
      id: "ID027",
      name: "Absorção_c",
      method: "p ∧ (p ∨ q) ⇔ p",
    },
    {
      id: "ID028",
      name: "Absorção_d",
      method: "p ∨ (p ∧ q) ⇔ p",
    },
    {
      id: "ID029",
      name: "Associação_c",
      method: "p ∧ (q ∧ r) ⇔ (p ∧ q) ∧ r",
    },
    {
      id: "ID030",
      name: "Associação_c",
      method: "(p ∧ q) ∧ r ⇔ p ∧ (q ∧ r)",
    },
    {
      id: "ID031",
      name: "Associação_d",
      method: "p ∨ (q ∨ r) ⇔ (p ∨ q) ∨ r",
    },
    {
      id: "ID032",
      name: "Associação_d",
      method: "(p ∨ q) ∨ r ⇔ p ∨ (q ∨ r)",
    },
    {
      id: "ID033",
      name: "Bicondicional_1",
      method: "p ↔ q ⇔ (p → q) ∧ (q → p)",
    },
    {
      id: "ID034",
      name: "Bicondicional_1",
      method: "(p → q) ∧ (q → p) ⇔ p ↔ q",
    },
    {
      id: "ID035",
      name: "Bicondicional_2",
      method: "p ↔ q ⇔ (∼p ∨ q) ∧ (∼q ∨ p)",
    },
    {
      id: "ID036",
      name: "Bicondicional_2",
      method: "(∼p ∨ q) ∧ (∼q ∨ p) ⇔ p ↔ q",
    },
    {
      id: "ID037",
      name: "Bicondicional_3",
      method: "p ↔ q ⇔ (p ∧ q) ∨ (∼p ∧ ∼q)",
    },
    {
      id: "ID038",
      name: "Bicondicional_3",
      method: "(p ∧ q) ∨ (∼p ∧ ∼q) ⇔ p ↔ q",
    },
    {
      id: "ID039",
      name: "Clavius",
      method: "p ⇔ ∼p → p",
    },
    {
      id: "ID040",
      name: "Clavius",
      method: "∼p → p ⇔ p",
    },
    {
      id: "ID041",
      name: "Comutação_c",
      method: "p ∧ q ⇔ q ∧ p",
    },
    {
      id: "ID042",
      name: "Comutação_d",
      method: "p ∨ q ⇔ q ∨ p",
    },
    {
      id: "ID04322231",
      name: "Complemento_1",
      method: "p ∨ ∼p ⇔ ⊤",
    },
    {
      id: "ID043",
      name: "Complemento_1",
      method: "⊤ ⇔ p ∨ ∼p",
    },
    {
      id: "ID044",
      name: "Complemento_2",
      method: "p ∧ ∼p ⇔ ⊥",
    },
    {
      id: "ID045",
      name: "Complemento_2",
      method: "⊥ ⇔ p ∧ ∼p",
    },
    {
      id: "ID046",
      name: "Condicional",
      method: "p → q ⇔ ∼p ∨ q",
    },
    {
      id: "ID047",
      name: "Condicional",
      method: "∼p ∨ q ⇔ p → q",
    },
    {
      id: "ID048",
      name: "Contrapositiva",
      method: "p → q ⇔ ∼q → ∼p",
    },
    {
      id: "ID049",
      name: "Contrapositiva",
      method: "∼q → ∼p ⇔ p → q",
    },
    {
      id: "ID050",
      name: "Morgan_c",
      method: "∼(p ∧ q) ⇔ ∼p ∨ ∼q",
    },
    {
      id: "ID051",
      name: "Morgan_c",
      method: "∼p ∨ ∼q ⇔ ∼(p ∧ q)",
    },
    {
      id: "ID052",
      name: "Morgan_d",
      method: "∼(p ∨ q) ⇔ ∼p ∧ ∼q",
    },
    {
      id: "ID053",
      name: "Morgan_d",
      method: "∼p ∧ ∼q ⇔ ∼(p ∨ q)",
    },
    {
      id: "ID054",
      name: "Distr._c",
      method: "p ∧ (q ∨ r) ⇔ (p ∧ q) ∨ (p ∧ r)",
    },
    {
      id: "ID055",
      name: "Distr._c",
      method: "(p ∧ q) ∨ (p ∧ r) ⇔ p ∧ (q ∨ r)",
    },
    {
      id: "ID056",
      name: "Distr._c2",
      method: "(p ∧ q) ∨ (r ∧ s) ⇔ (p ∨ (r ∧ s)) ∧ (q ∨ (r ∧ s))",
    },
    {
      id: "ID057",
      name: "Distr._c2",
      method: "(p ∨ (r ∧ s)) ∧ (q ∨ (r ∧ s)) ⇔ (p ∧ q) ∨ (r ∧ s)",
    },
    {
      id: "ID058",
      name: "Distr._d",
      method: "p ∨ (q ∧ r) ⇔ (p ∨ q) ∧ (p ∨ r)",
    },
    {
      id: "ID059",
      name: "Distr._d",
      method: "(p ∨ q) ∧ (p ∨ r) ⇔ p ∨ (q ∧ r)",
    },
    {
      id: "ID060",
      name: "Distr._d2",
      method: "(p ∨ q) ∧ (r ∨ s) ⇔ (p ∧ (r ∨ s)) ∨ (q ∧ (r ∨ s))",
    },
    {
      id: "ID061",
      name: "Distr._d2",
      method: "(p ∧ (r ∨ s)) ∨ (q ∧ (r ∨ s)) ⇔ (p ∨ q) ∧ (r ∨ s)",
    },
    {
      id: "ID062",
      name: "Distr._cc",
      method: "p → (q ∧ r) ⇔ (p → q) ∧ (p → r)",
    },
    {
      id: "ID063",
      name: "Distr._cc",
      method: "(p → q) ∧ (p → r) ⇔ p → (q ∧ r)",
    },
    {
      id: "ID064",
      name: "Distr._dc",
      method: "p → (q ∨ r) ⇔ (p → q) ∨ (p → r)",
    },
    {
      id: "ID065",
      name: "Distr._dc",
      method: "(p → q) ∨ (p → r) ⇔ p → (q ∨ r)",
    },
    {
      id: "ID066",
      name: "Dupla negação",
      method: "∼∼p ⇔ p",
    },
    {
      id: "ID067",
      name: "Dupla negação",
      method: "p ⇔ ∼∼p",
    },
    {
      id: "ID068",
      name: "Exportação-importação",
      method: "(p ∧ q) → r ⇔ p → (q → r)",
    },
    {
      id: "ID069",
      name: "Exportação-importação",
      method: "p → (q → r) ⇔ (p ∧ q) → r",
    },
    {
      id: "ID070",
      name: "Idempotência_c",
      method: "p ∧ p ⇔ p",
    },
    {
      id: "ID071",
      name: "Idempotência_c",
      method: "p ⇔ p ∧ p",
    },
    {
      id: "ID072",
      name: "Idempotência_d",
      method: "p ∨ p ⇔ p",
    },
    {
      id: "ID073",
      name: "Idempotência_d",
      method: "p ⇔ p ∨ p",
    },
    {
      id: "ID074",
      name: "Identidade_cc",
      method: "p ∧ ⊥ ⇔ ⊥",
    },
    {
      id: "ID075",
      name: "Identidade_cc",
      method: "⊥ ⇔ p ∧ ⊥",
    },
    {
      id: "ID076",
      name: "Identidade_ct",
      method: "p ∧ ⊤ ⇔ p",
    },
    {
      id: "ID077",
      name: "Identidade_ct",
      method: "p ⇔ p ∧ ⊤",
    },
    {
      id: "ID078",
      name: "Identidade_dc",
      method: "p ∨ ⊥ ⇔ p",
    },
    {
      id: "ID079",
      name: "Identidade_dc",
      method: "p ⇔ p ∨ ⊥",
    },
    {
      id: "ID080",
      name: "Identidade_dt",
      method: "p ∨ ⊤ ⇔ ⊤",
    },
    {
      id: "ID081",
      name: "Identidade_dt",
      method: "⊤ ⇔ p ∨ ⊤",
    },
    {
      id: "ID082",
      name: "Neg. condicional",
      method: "p ∨ ⊤ ⇔ ⊤",
    },
    {
      id: "ID083",
      name: "Neg. condicional",
      method: "⊤ ⇔ p ∨ ⊤",
    },
    {
      id: "ID084",
      name: "Neg. condicional",
      method: "∼(p → q) ⇔ p ∧ ∼q",
    },
    {
      id: "ID085",
      name: "Neg. condicional",
      method: "p ∧ ∼q ⇔ ∼(p → q)",
    },
    {
      id: "ID086",
      name: "Troca premissas",
      method: "p → (q → r) ⇔ q → (p → r)",
    },
    {
      id: "ID087",
      name: "Troca premissas",
      method: "q → (p → r) ⇔ p → (q → r)",
    },
  ] as EquivalenceRule[],
};
