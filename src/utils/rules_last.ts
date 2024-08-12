

export interface HypothesisRule {
  id: string;
  name: string;
  method: string;
}

export interface InferenceRule {
  id: string;
  name: string;
  method: string;
}



export interface PredicateEquivalenceRule {
  id: string;
  name: string;
  method: string;
}


export interface PredicateInferenceRule {
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
  hypothesis: [
    {
      id: "5000",
      name: "Ad. Hipótese",
      method: "p ⇒ p",
    },
    {
      id: "5001",
      name: "Rem. Hipótese",
      method: "p ⇒ p → q",
    },
    {
      id: "5002",
      name: "Red. Absurdo",
      method: "p ⇒ ∼p",
    },

  ] as HypothesisRule[],
  predicate_inference: [
    {
      id: "2000",
      name: "GU_lr",
      method: "p(a) ⇒ ∀xp(x)",
    },
    {
      id: "2001",
      name: "GE_lr",
      method: "p(a) ⇒ ∃xp(x)",
    },
    {
      id: "2002",
      name: "PU_lr",
      method: "∀xp(x) ⇒ p(a)",
    },
    {
      id: "2003",
      name: "PE_lr",
      method: "∃xp(x) ⇒ p(a)",
    },
  ] as PredicateInferenceRule[],

  predicate_equivalence: [
    {
      id: "3000",
      name: "DMU_lr",
      method: "∼∀xp(x) ⇒ ∃x∼p(x)",
    },
    {
      id: "3001",
      name: "DMU_rl",
      method: "∃x∼p(x) ⇒ ∼∀xp(x)",
    },
    {
      id: "3002",
      name: "DME_lr",
      method: "∼∃xp(x) ⇒ ∀x∼p(x)",
    },
    {
      id: "3003",
      name: "DME_rl",
      method: "∀x∼p(x) ⇒ ∼∃xp(x)",
    },
  ] as PredicateEquivalenceRule[],
  inference: [
    {
      id: "1000",
      name: "Absorção",
      method: "p → q ⇒ p → (p → q)",
    },
    {
      id: "1001",
      name: "Adição_1",
      method: "p ⇒ p ∨ q",
    },
    {
      id: "1002",
      name: "Adição_2",
      method: "p ⇒ q ∨ p",
    },
    {
      id: "1003",
      name: "Conjunção_1",
      method: "p, q ⇒ p ∧ q",
    },
    {
      id: "1004",
      name: "Conjunção_2",
      method: "p, q ⇒ q ∧ p",
    },
    {
      id: "1005",
      name: "Dil. constr.",
      method: "p → q, r → s, p ∨ r ⇒ q ∨ s",
    },
    {
      id: "1006",
      name: "Dil. destr.",
      method: "p → q, r → s, ∼q ∨ ∼s ⇒ ∼p ∨ ∼r",
    },
    {
      id: "1007",
      name: "Modus ponens",
      method: "p → q, p ⇒ q",
    },
    {
      id: "1008",
      name: "Modus tollens",
      method: "p → q, ∼q ⇒ ∼p",
    },
    {
      id: "1009",
      name: "Sil. disj._1",
      method: "p ∨ q, ∼p ⇒ q",
    },
    {
      id: "1010",
      name: "Sil. disj._2",
      method: "p ∨ q, ∼q ⇒ p",
    },
    {
      id: "1011",
      name: "Sil. hipot.",
      method: "p → q, q → r ⇒ p → r",
    },
    {
      id: "1012",
      name: "Simplificação_1",
      method: "p ∧ q ⇒ p",
    },
    {
      id: "1013",
      name: "Simplificação_2",
      method: "p ∧ q ⇒ q",
    },
  ] as InferenceRule[],
  equivalence: [
    {
      id: "4000",
      name: "ABS_cond_lr",
      method: "p → (p ∧ q) ⇔ p → q",
    },
    {
      id: "4001",
      name: "ABS_cond_rl",
      method: "p → q ⇔ p → (p ∧ q)",
    },
    {
      id: "4002",
      name: "ABS_c_lr",
      method: "p ∧ (p ∨ q) ⇔ p",
    },
    {
      id: "4003",
      name: "ABS_d_lr",
      method: "p ∨ (p ∧ q) ⇔ p",
    },
    {
      id: "4004",
      name: "ASSOC_c_lr",
      method: "p ∧ (q ∧ r) ⇔ (p ∧ q) ∧ r",
    },
    {
      id: "4005",
      name: "ASSOC_c_rl",
      method: "(p ∧ q) ∧ r ⇔ p ∧ (q ∧ r)",
    },
    {
      id: "4006",
      name: "ASSOC_d_lr",
      method: "p ∨ (q ∨ r) ⇔ (p ∨ q) ∨ r",
    },
    {
      id: "4007",
      name: "ASSOC_d_rl",
      method: "(p ∨ q) ∨ r ⇔ p ∨ (q ∨ r)",
    },
    {
      id: "4008",
      name: "Bic1_lr",
      method: "p ↔ q ⇔ (p → q) ∧ (q → p)",
    },
    {
      id: "4009",
      name: "Bic1_rl",
      method: "(p → q) ∧ (q → p) ⇔ p ↔ q",
    },
    {
      id: "4010",
      name: "Bic2_lr",
      method: "p ↔ q ⇔ (∼p ∨ q) ∧ (∼q ∨ p)",
    },
    {
      id: "4011",
      name: "Bic2_rl",
      method: "(∼p ∨ q) ∧ (∼q ∨ p) ⇔ p ↔ q",
    },
    {
      id: "4012",
      name: "Bic3_lr",
      method: "p ↔ q ⇔ (p ∧ q) ∨ (∼p ∧ ∼q)",
    },
    {
      id: "4013",
      name: "Bic3_rl",
      method: "(p ∧ q) ∨ (∼p ∧ ∼q) ⇔ p ↔ q",
    },
    {
      id: "4014",
      name: "Clavius_lr",
      method: "p ⇔ ∼p → p",
    },
    {
      id: "4015",
      name: "Clavius_rl",
      method: "∼p → p ⇔ p",
    },
    {
      id: "4016",
      name: "COM_c_lr",
      method: "p ∧ q ⇔ q ∧ p",
    },
    {
      id: "4017",
      name: "COM_d_lr",
      method: "p ∨ q ⇔ q ∨ p",
    },
    {
      id: "4018",
      name: "COMPL_c_lr",
      method: "p ∨ ∼p ⇔ ⊤",
    },
    {
      id: "4019",
      name: "COMPL_c_rl",
      method: "⊤ ⇔ p ∨ ∼p",
    },
    {
      id: "4020",
      name: "COMPL_d_lr",
      method: "p ∧ ∼p ⇔ ⊥",
    },
    {
      id: "4021",
      name: "COMPL_d_rl",
      method: "⊥ ⇔ p ∧ ∼p",
    },
    {
      id: "4022",
      name: "COMPL_F_lr",
      method: "∼⊥ ⇔ ⊤",
    },
    {
      id: "4023",
      name: "COMPL_F_rl",
      method: "⊤ ⇔ ∼⊥",
    },
    {
      id: "4024",
      name: "COMPL_V_lr",
      method: "∼⊤ ⇔ ⊥",
    },
    {
      id: "4025",
      name: "COMPL_V_rl",
      method: "⊥ ⇔ ∼⊤",
    },
    {
      id: "4026",
      name: "COND_lr",
      method: "p → q ⇔ ∼p ∨ q",
    },
    {
      id: "4027",
      name: "COND_rl",
      method: "∼p ∨ q ⇔ p → q",
    },
    {
      id: "4028",
      name: "CP_lr",
      method: "p → q ⇔ ∼q → ∼p",
    },
    {
      id: "4029",
      name: "CP_rl",
      method: "∼q → ∼p ⇔ p → q",
    },
    {
      id: "4030",
      name: "DISc_lr",
      method: "p ∧ (q ∨ r) ⇔ (p ∧ q) ∨ (p ∧ r)",
    },
    {
      id: "4031",
      name: "DISc_rl",
      method: "(p ∧ q) ∨ (p ∧ r) ⇔ p ∧ (q ∨ r)",
    },
    {
      id: "4032",
      name: "DISTc2_lr",
      method: "(p ∧ q) ∨ (r ∧ s) ⇔ (p ∨ (r ∧ s)) ∧ (q ∨ (r ∧ s))",
    },
    {
      id: "4033",
      name: "DISTc2_rl",
      method: "(p ∨ (r ∧ s)) ∧ (q ∨ (r ∧ s)) ⇔ (p ∧ q) ∨ (r ∧ s)",
    },
    {
      id: "4034",
      name: "DISTd_lr",
      method: "p ∨ (q ∧ r) ⇔ (p ∨ q) ∧ (p ∨ r)",
    },
    {
      id: "4035",
      name: "DISTd_rl",
      method: "(p ∨ q) ∧ (p ∨ r) ⇔ p ∨ (q ∧ r)",
    },
    {
      id: "4036",
      name: "DISTd2_lr",
      method: "(p ∨ q) ∧ (r ∨ s) ⇔ (p ∧ (r ∨ s)) ∨ (q ∧ (r ∨ s))",
    },
    {
      id: "4037",
      name: "DISTd2_rl",
      method: "(p ∧ (r ∨ s)) ∨ (q ∧ (r ∨ s)) ⇔ (p ∨ q) ∧ (r ∨ s)",
    },
    {
      id: "4038",
      name: "DISTcc_lr",
      method: "p → (q ∧ r) ⇔ (p → q) ∧ (p → r)",
    },
    {
      id: "4039",
      name: "DISTcc_rl",
      method: "(p → q) ∧ (p → r) ⇔ p → (q ∧ r)",
    },
    {
      id: "4040",
      name: "DISTdc_lr",
      method: "p → (q ∨ r) ⇔ (p → q) ∨ (p → r)",
    },
    {
      id: "4041",
      name: "DISTdc_rl",
      method: "(p → q) ∨ (p → r) ⇔ p → (q ∨ r)",
    },
    {
      id: "4042",
      name: "DM_c_lr",
      method: "∼(p ∧ q) ⇔ ∼p ∨ ∼q",
    },
    {
      id: "4043",
      name: "DM_c_rl",
      method: "∼p ∨ ∼q ⇔ ∼(p ∧ q)",
    },
    {
      id: "4044",
      name: "DM_d_lr",
      method: "∼(p ∨ q) ⇔ ∼p ∧ ∼q",
    },
    {
      id: "4045",
      name: "DM_d_rl",
      method: "∼p ∧ ∼q ⇔ ∼(p ∨ q)",
    },
    {
      id: "4046",
      name: "DN_lr",
      method: "∼∼p ⇔ p",
    },
    {
      id: "4047",
      name: "DN_rl",
      method: "p ⇔ ∼∼p",
    },
    {
      id: "4048",
      name: "E_I_lr",
      method: "(p ∧ q) → r ⇔ p → (q → r)",
    },
    {
      id: "4049",
      name: "E_I_rl",
      method: "p → (q → r) ⇔ (p ∧ q) → r",
    },
    {
      id: "4050",
      name: "IDEMP_c_lr",
      method: "p ∧ p ⇔ p",
    },
    {
      id: "4051",
      name: "IDEMP_c_rl",
      method: "p ⇔ p ∧ p",
    },
    {
      id: "4052",
      name: "IDEMP_d_lr",
      method: "p ∨ p ⇔ p",
    },
    {
      id: "4053",
      name: "IDEMP_d_rl",
      method: "p ⇔ p ∨ p",
    },
    {
      id: "4054",
      name: "IDENT_cc_lr",
      method: "p ∧ ⊥ ⇔ ⊥",
    },
    {
      id: "4055",
      name: "IDENT_cc_rl",
      method: "⊥ ⇔ p ∧ ⊥",
    },
    {
      id: "4056",
      name: "IDENT_ct_lr",
      method: "p ∧ ⊤ ⇔ p",
    },
    {
      id: "4057",
      name: "IDENT_ct_rl",
      method: "p ⇔ p ∧ ⊤",
    },
    {
      id: "4058",
      name: "IDENT_dc_lr",
      method: "p ∨ ⊥ ⇔ p",
    },
    {
      id: "4059",
      name: "IDENT_dc_rl",
      method: "p ⇔ p ∨ ⊥",
    },
    {
      id: "4060",
      name: "IDENT_dt_lr",
      method: "p ∨ ⊤ ⇔ ⊤",
    },
    {
      id: "4061",
      name: "IDENT_dt_rl",
      method: "⊤ ⇔ p ∨ ⊤",
    },
    {
      id: "4062",
      name: "NEG_COND_lr",
      method: "∼(p → q) ⇔ p ∧ ∼q",
    },
    {
      id: "4063",
      name: "NEG_COND_rl",
      method: "p ∧ ∼q ⇔ ∼(p → q)",
    },
    {
      id: "4064",
      name: "TP_lr",
      method: "p → (q → r) ⇔ q → (p → r)",
    },
    {
      id: "4065",
      name: "TP_rl",
      method: "q → (p → r) ⇔ p → (q → r)",
    },
  ] as EquivalenceRule[],
};