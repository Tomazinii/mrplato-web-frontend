  

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
      method: "A ⇒ A",
    },
    {
      id: "5001",
      name: "Rem. Hipótese",
      method: "A ⇒ A → B",
    },
    {
      id: "5002",
      name: "Red. Absurdo",
      method: "A ⇒ ∼A",
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
      method: "A → B ⇒ A → (A → B)",
    },
    {
      id: "1001",
      name: "Adição_1",
      method: "A ⇒ A ∨ B",
    },
    {
      id: "1002",
      name: "Adição_2",
      method: "A ⇒ B ∨ A",
    },
    {
      id: "1003",
      name: "Conjunção_1",
      method: "A, B ⇒ A ∧ B",
    },
    {
      id: "1004",
      name: "Conjunção_2",
      method: "A, B ⇒ B ∧ A",
    },
    {
      id: "1005",
      name: "Dil. constr.",
      method: "A → B, C → D, A ∨ C ⇒ B ∨ D",
    },
    {
      id: "1006",
      name: "Dil. destr.",
      method: "A → B, C → D, ∼B ∨ ∼D ⇒ ∼A ∨ ∼r",
    },
    {
      id: "1007",
      name: "Modus Ponens",
      method: "A → B, A ⇒ B",
    },
    {
      id: "1008",
      name: "Modus tollens",
      method: "A → B, ∼B ⇒ ∼A",
    },
    {
      id: "1009",
      name: "Sil. disj._1",
      method: "A ∨ B, ∼A ⇒ B",
    },
    {
      id: "1010",
      name: "Sil. disj._2",
      method: "A ∨ B, ∼B ⇒ A",
    },
    {
      id: "1011",
      name: "Sil. hipot.",
      method: "A → B, B → C ⇒ A → C",
    },
    {
      id: "1012",
      name: "Simplificação_1",
      method: "A ∧ B ⇒ A",
    },
    {
      id: "1013",
      name: "Simplificação_2",
      method: "A ∧ B ⇒ B",
    },
  ] as InferenceRule[],
  equivalence: [
    {
      id: "4000",
      name: "ABS_cond_lr",
      method: "A → (A ∧ B) ⇔ A → B",
    },
    {
      id: "4001",
      name: "ABS_cond_rl",
      method: "A → B ⇔ A → (A ∧ B)",
    },
    {
      id: "4002",
      name: "ABS_c_lr",
      method: "A ∧ (A ∨ B) ⇔ A",
    },
    {
      id: "4003",
      name: "ABS_d_lr",
      method: "A ∨ (A ∧ B) ⇔ A",
    },
    {
      id: "4004",
      name: "ASSOC_c_lr",
      method: "A ∧ (B ∧ C) ⇔ (A ∧ B) ∧ C",
    },
    {
      id: "4005",
      name: "ASSOC_c_rl",
      method: "(A ∧ B) ∧ C ⇔ A ∧ (B ∧ C)",
    },
    {
      id: "4006",
      name: "ASSOC_d_lr",
      method: "A ∨ (B ∨ C) ⇔ (A ∨ B) ∨ C",
    },
    {
      id: "4007",
      name: "ASSOC_d_rl",
      method: "(A ∨ B) ∨ C ⇔ A ∨ (B ∨ C)",
    },
    {
      id: "4008",
      name: "Bic1_lr",
      method: "A ↔ B ⇔ (A → B) ∧ (B → A)",
    },
    {
      id: "4009",
      name: "Bic1_rl",
      method: "(A → B) ∧ (B → A) ⇔ A ↔ B",
    },
    {
      id: "4010",
      name: "Bic2_lr",
      method: "A ↔ B ⇔ (∼A ∨ B) ∧ (∼B ∨ A)",
    },
    {
      id: "4011",
      name: "Bic2_rl",
      method: "(∼A ∨ B) ∧ (∼B ∨ A) ⇔ A ↔ B",
    },
    {
      id: "4012",
      name: "Bic3_lr",
      method: "A ↔ B ⇔ (A ∧ B) ∨ (∼A ∧ ∼B)",
    },
    {
      id: "4013",
      name: "Bic3_rl",
      method: "(A ∧ B) ∨ (∼A ∧ ∼B) ⇔ A ↔ B",
    },
    {
      id: "4014",
      name: "Clavius_lr",
      method: "A ⇔ ∼A → A",
    },
    {
      id: "4015",
      name: "Clavius_rl",
      method: "∼A → A ⇔ A",
    },
    {
      id: "4016",
      name: "COM_c_lr",
      method: "A ∧ B ⇔ B ∧ A",
    },
    {
      id: "4017",
      name: "COM_d_lr",
      method: "A ∨ B ⇔ B ∨ A",
    },
    {
      id: "4018",
      name: "COMPL_c_lr",
      method: "A ∨ ∼A ⇔ ⊤",
    },
    {
      id: "4019",
      name: "COMPL_c_rl",
      method: "⊤ ⇔ A ∨ ∼A",
    },
    {
      id: "4020",
      name: "COMPL_d_lr",
      method: "A ∧ ∼A ⇔ ⊥",
    },
    {
      id: "4021",
      name: "COMPL_d_rl",
      method: "⊥ ⇔ A ∧ ∼A",
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
      method: "A → B ⇔ ∼A ∨ B",
    },
    {
      id: "4027",
      name: "COND_rl",
      method: "∼A ∨ B ⇔ A → B",
    },
    {
      id: "4028",
      name: "CP_lr",
      method: "A → B ⇔ ∼B → ∼A",
    },
    {
      id: "4029",
      name: "CP_rl",
      method: "∼B → ∼A ⇔ A → B",
    },
    {
      id: "4030",
      name: "DISc_lr",
      method: "A ∧ (B ∨ C) ⇔ (A ∧ B) ∨ (A ∧ C)",
    },
    {
      id: "4031",
      name: "DISc_rl",
      method: "(A ∧ B) ∨ (A ∧ C) ⇔ A ∧ (B ∨ C)",
    },
    {
      id: "4032",
      name: "DISTc2_lr",
      method: "(A ∧ B) ∨ (r ∧ D) ⇔ (A ∨ (r ∧ D)) ∧ (B ∨ (r ∧ D))",
    },
    {
      id: "4033",
      name: "DISTc2_rl",
      method: "(A ∨ (r ∧ D)) ∧ (B ∨ (r ∧ D)) ⇔ (A ∧ B) ∨ (r ∧ D)",
    },
    {
      id: "4034",
      name: "DISTd_lr",
      method: "A ∨ (B ∧ C) ⇔ (A ∨ B) ∧ (A ∨ C)",
    },
    {
      id: "4035",
      name: "DISTd_rl",
      method: "(A ∨ B) ∧ (A ∨ C) ⇔ A ∨ (B ∧ C)",
    },
    {
      id: "4036",
      name: "DISTd2_lr",
      method: "(A ∨ B) ∧ (r ∨ D) ⇔ (A ∧ (r ∨ D)) ∨ (B ∧ (r ∨ D))",
    },
    {
      id: "4037",
      name: "DISTd2_rl",
      method: "(A ∧ (r ∨ D)) ∨ (B ∧ (r ∨ D)) ⇔ (A ∨ B) ∧ (r ∨ D)",
    },
    {
      id: "4038",
      name: "DISTcc_lr",
      method: "A → (B ∧ C) ⇔ (A → B) ∧ (A → C)",
    },
    {
      id: "4039",
      name: "DISTcc_rl",
      method: "(A → B) ∧ (A → C) ⇔ A → (B ∧ C)",
    },
    {
      id: "4040",
      name: "DISTdc_lr",
      method: "A → (B ∨ C) ⇔ (A → B) ∨ (A → C)",
    },
    {
      id: "4041",
      name: "DISTdc_rl",
      method: "(A → B) ∨ (A → C) ⇔ A → (B ∨ C)",
    },
    {
      id: "4042",
      name: "DM_c_lr",
      method: "∼(A ∧ B) ⇔ ∼A ∨ ∼B",
    },
    {
      id: "4043",
      name: "DM_c_rl",
      method: "∼A ∨ ∼B ⇔ ∼(A ∧ B)",
    },
    {
      id: "4044",
      name: "DM_d_lr",
      method: "∼(A ∨ B) ⇔ ∼A ∧ ∼B",
    },
    {
      id: "4045",
      name: "DM_d_rl",
      method: "∼A ∧ ∼B ⇔ ∼(A ∨ B)",
    },
    {
      id: "4046",
      name: "DN_lr",
      method: "∼∼A ⇔ A",
    },
    {
      id: "4047",
      name: "DN_rl",
      method: "A ⇔ ∼∼A",
    },
    {
      id: "4048",
      name: "E_I_lr",
      method: "(A ∧ B) → C ⇔ A → (B → C)",
    },
    {
      id: "4049",
      name: "E_I_rl",
      method: "A → (B → C) ⇔ (A ∧ B) → C",
    },
    {
      id: "4050",
      name: "IDEMP_c_lr",
      method: "A ∧ A ⇔ A",
    },
    {
      id: "4051",
      name: "IDEMP_c_rl",
      method: "A ⇔ A ∧ A",
    },
    {
      id: "4052",
      name: "IDEMP_d_lr",
      method: "A ∨ A ⇔ A",
    },
    {
      id: "4053",
      name: "IDEMP_d_rl",
      method: "A ⇔ A ∨ A",
    },
    {
      id: "4054",
      name: "IDENT_cc_lr",
      method: "A ∧ ⊥ ⇔ ⊥",
    },
    {
      id: "4055",
      name: "IDENT_cc_rl",
      method: "⊥ ⇔ A ∧ ⊥",
    },
    {
      id: "4056",
      name: "IDENT_ct_lr",
      method: "A ∧ ⊤ ⇔ A",
    },
    {
      id: "4057",
      name: "IDENT_ct_rl",
      method: "A ⇔ A ∧ ⊤",
    },
    {
      id: "4058",
      name: "IDENT_dc_lr",
      method: "A ∨ ⊥ ⇔ A",
    },
    {
      id: "4059",
      name: "IDENT_dc_rl",
      method: "A ⇔ A ∨ ⊥",
    },
    {
      id: "4060",
      name: "IDENT_dt_lr",
      method: "A ∨ ⊤ ⇔ ⊤",
    },
    {
      id: "4061",
      name: "IDENT_dt_rl",
      method: "⊤ ⇔ A ∨ ⊤",
    },
    {
      id: "4062",
      name: "NEG_COND_lr",
      method: "∼(A → B) ⇔ A ∧ ∼B",
    },
    {
      id: "4063",
      name: "NEG_COND_rl",
      method: "A ∧ ∼B ⇔ ∼(A → B)",
    },
    {
      id: "4064",
      name: "TP_lr",
      method: "A → (B → C) ⇔ B → (A → C)",
    },
    {
      id: "4065",
      name: "TP_rl",
      method: "B → (A → C) ⇔ A → (B → C)",
    },
  ] as EquivalenceRule[],
};
