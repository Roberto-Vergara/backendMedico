const enfermedades = {
  GERD: {
    descripcion: "Trastorno en el que el ácido del estómago regresa hacia el esófago, causando acidez y malestar.",
    recomendacion: "Evite comidas grasosas, picantes o muy copiosas. No se acueste inmediatamente después de comer.",
    especialista: "Gastroenterólogo"
  },
  "Chronic cholestasis": {
    descripcion: "Condición en la que el flujo de bilis se reduce o bloquea, lo que puede causar ictericia y picazón.",
    recomendacion: "Evite el alcohol y las comidas grasosas. Consulte para evaluar función hepática y biliar.",
    especialista: "Hepatólogo"
  },
  "Drug Reaction": {
    descripcion: "Respuesta adversa del cuerpo a un medicamento, que puede variar desde una leve erupción hasta reacciones graves.",
    recomendacion: "Suspenda el medicamento sospechoso y acuda inmediatamente a un médico.",
    especialista: "Alergólogo o dermatólogo"
  },
  "Peptic ulcer diseae": {
    descripcion: "Lesión en el revestimiento del estómago o intestino causada por exceso de ácido o infección por H. pylori.",
    recomendacion: "Evite el alcohol, el tabaco y medicamentos irritantes como los antiinflamatorios.",
    especialista: "Gastroenterólogo"
  },
  AIDS: {
    descripcion: "Enfermedad causada por el virus VIH que debilita el sistema inmunitario.",
    recomendacion: "Siga el tratamiento antirretroviral y evite infecciones oportunistas mediante controles regulares.",
    especialista: "Infectólogo"
  },
  Gastroenteritis: {
    descripcion: "Inflamación del estómago e intestinos causada por virus, bacterias o alimentos contaminados.",
    recomendacion: "Manténgase hidratado y consuma alimentos suaves. Si hay fiebre o deshidratación, consulte a un médico.",
    especialista: "Médico general o gastroenterólogo"
  },
  "Bronchial Asthma": {
    descripcion: "Trastorno respiratorio que causa dificultad para respirar debido a la inflamación de las vías respiratorias.",
    recomendacion: "Evite alérgenos, polvo y humo. Use inhaladores según indicación médica.",
    especialista: "Neumólogo o alergólogo"
  },
  "Hypertension ": {
    descripcion: "Presión arterial elevada que puede aumentar el riesgo de enfermedades cardíacas y accidentes cerebrovasculares.",
    recomendacion: "Reduzca la sal, haga ejercicio regularmente y siga el tratamiento antihipertensivo indicado.",
    especialista: "Cardiólogo"
  },
  Migraine: {
    descripcion: "Dolor de cabeza intenso acompañado de náuseas, sensibilidad a la luz o sonido.",
    recomendacion: "Evite factores desencadenantes como el estrés o la falta de sueño. Descanse en un lugar oscuro y silencioso.",
    especialista: "Neurólogo"
  },
  "Cervical spondylosis": {
    descripcion: "Degeneración de los discos y articulaciones del cuello que provoca dolor y rigidez.",
    recomendacion: "Realice ejercicios de estiramiento y mantenga una postura adecuada. En casos graves, fisioterapia.",
    especialista: "Traumatólogo o fisiatra"
  },
  "Paralysis (brain hemorrhage)": {
    descripcion: "Pérdida de movimiento en parte del cuerpo debido a una hemorragia cerebral.",
    recomendacion: "Requiere atención médica inmediata y rehabilitación posterior.",
    especialista: "Neurólogo o fisiatra"
  },
  Jaundice: {
    descripcion: "Color amarillento de piel y ojos causado por acumulación de bilirrubina en la sangre.",
    recomendacion: "Evite el alcohol y comidas grasosas. Busque atención médica para identificar la causa.",
    especialista: "Hepatólogo"
  },
  Malaria: {
    descripcion: "Enfermedad infecciosa transmitida por mosquitos, que causa fiebre, escalofríos y anemia.",
    recomendacion: "Acuda inmediatamente al médico. No se automedique y siga el tratamiento antipalúdico.",
    especialista: "Infectólogo"
  },
  "Chicken pox": {
    descripcion: "Infección viral que causa fiebre y erupciones con ampollas.",
    recomendacion: "Evite rascarse y mantenga la piel limpia. Aíslese hasta que las lesiones se sequen.",
    especialista: "Médico general o pediatra"
  },
  Dengue: {
    descripcion: "Infección viral transmitida por mosquitos, con fiebre alta, dolor muscular y erupciones.",
    recomendacion: "No tome aspirina ni ibuprofeno. Manténgase hidratado y consulte a un médico.",
    especialista: "Médico general o infectólogo"
  },
  Typhoid: {
    descripcion: "Infección bacteriana causada por Salmonella typhi, caracterizada por fiebre alta y malestar general.",
    recomendacion: "Siga el tratamiento antibiótico prescrito y evite consumir agua o alimentos contaminados.",
    especialista: "Infectólogo"
  },
  "hepatitis A": {
    descripcion: "Infección viral del hígado transmitida por agua o alimentos contaminados.",
    recomendacion: "Descanse, manténgase hidratado y evite el alcohol. La mayoría de los casos se curan solos.",
    especialista: "Hepatólogo"
  },
  "Hepatitis B": {
    descripcion: "Infección del hígado causada por el virus de la hepatitis B, que puede volverse crónica.",
    recomendacion: "Siga controles médicos regulares y evite compartir objetos personales o relaciones sin protección.",
    especialista: "Hepatólogo"
  },
  "Hepatitis C": {
    descripcion: "Infección del hígado que se transmite por sangre contaminada y puede causar cirrosis.",
    recomendacion: "Siga el tratamiento antiviral y evite el consumo de alcohol.",
    especialista: "Hepatólogo"
  },
  "Hepatitis D": {
    descripcion: "Virus que solo infecta a personas con hepatitis B y puede agravar la enfermedad hepática.",
    recomendacion: "Controle su función hepática y siga las indicaciones médicas rigurosamente.",
    especialista: "Hepatólogo"
  },
  "Hepatitis E": {
    descripcion: "Infección viral transmitida por agua contaminada, generalmente leve pero grave en embarazadas.",
    recomendacion: "Evite agua sin hervir y mantenga una buena higiene alimentaria.",
    especialista: "Hepatólogo"
  },
  "Alcoholic hepatitis": {
    descripcion: "Inflamación del hígado causada por consumo excesivo de alcohol.",
    recomendacion: "Suspenda completamente el consumo de alcohol y siga dieta balanceada.",
    especialista: "Hepatólogo o nutricionista"
  },
  Tuberculosis: {
    descripcion: "Infección bacteriana que afecta principalmente los pulmones y se transmite por el aire.",
    recomendacion: "Siga el tratamiento completo sin interrupciones. Evite el contacto cercano con otras personas.",
    especialista: "Neumólogo o infectólogo"
  },
  "Common Cold": {
    descripcion: "Infección viral leve del tracto respiratorio superior.",
    recomendacion: "Descanse, beba líquidos y evite cambios bruscos de temperatura.",
    especialista: "Médico general"
  },
  Pneumonia: {
    descripcion: "Infección pulmonar que causa tos, fiebre y dificultad respiratoria.",
    recomendacion: "Siga el tratamiento con antibióticos si se prescribe y descanse adecuadamente.",
    especialista: "Neumólogo"
  },
  "Dimorphic hemmorhoids(piles)": {
    descripcion: "Inflamación y sangrado en las venas del recto o ano.",
    recomendacion: "Consuma fibra y evite el estreñimiento. En casos graves, puede requerir tratamiento quirúrgico.",
    especialista: "Proctólogo"
  },
  "Heart attack": {
    descripcion: "Interrupción del flujo sanguíneo al corazón, provocando daño al músculo cardíaco.",
    recomendacion: "Busque atención médica inmediata. No se automedique.",
    especialista: "Cardiólogo"
  },
  Hypothyroidism: {
    descripcion: "Trastorno en el que la glándula tiroides produce poca hormona tiroidea.",
    recomendacion: "Siga el tratamiento con hormona tiroidea y realice controles periódicos.",
    especialista: "Endocrinólogo"
  },
  Hyperthyroidism: {
    descripcion: "Trastorno en el que la glándula tiroides produce exceso de hormonas.",
    recomendacion: "Evite el consumo excesivo de yodo y siga las indicaciones médicas.",
    especialista: "Endocrinólogo"
  },
  Hypoglycemia: {
    descripcion: "Nivel anormalmente bajo de azúcar en la sangre, que puede causar mareos o pérdida de conciencia.",
    recomendacion: "Consuma alimentos o bebidas con azúcar y consulte a un médico si los episodios son frecuentes.",
    especialista: "Endocrinólogo"
  },
  Osteoarthristis: {
    descripcion: "Desgaste del cartílago que recubre las articulaciones, causando dolor y rigidez.",
    recomendacion: "Mantenga peso saludable y realice ejercicios de bajo impacto.",
    especialista: "Reumatólogo"
  },
  Arthritis: {
    descripcion: "Inflamación de las articulaciones que provoca dolor y dificultad para moverse.",
    recomendacion: "Evite esfuerzos físicos intensos y siga tratamiento antiinflamatorio según indicación.",
    especialista: "Reumatólogo"
  },
  "(vertigo) Paroymsal  Positional Vertigo": {
    descripcion: "Sensación de giro o mareo desencadenada por cambios en la posición de la cabeza.",
    recomendacion: "Evite movimientos bruscos y acuda a fisioterapia vestibular.",
    especialista: "Otorrinolaringólogo o neurólogo"
  },
  "Urinary tract infection": {
    descripcion: "Infección del sistema urinario que causa ardor o dolor al orinar.",
    recomendacion: "Beba mucha agua y siga el tratamiento antibiótico completo.",
    especialista: "Urólogo"
  },
  Psoriasis: {
    descripcion: "Enfermedad autoinmune que causa placas rojas y escamosas en la piel.",
    recomendacion: "Use cremas hidratantes y evite factores que agraven la inflamación.",
    especialista: "Dermatólogo"
  }
};


const enfermedadRecomendacion=(prediccion)=>{
    for(const padecimiento in enfermedades){
        // console.log(padecimiento);
        
        if(prediccion==padecimiento){
            console.log(enfermedades[padecimiento]); 
            return enfermedades[padecimiento]
            
        }
    }
}

