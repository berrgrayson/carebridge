export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-clovis-paulin.png",
    name: "Clovis Paulin BARAMBUYE",
  },
  {
    image: "/assets/images/dr-stanislas.png",
    name: "Stanislas HARAKANDI",
  },
  {
    image: "/assets/images/dr-rosine.png",
    name: "Rosine MUHIMPUNDU",
  },
  {
    image: "/assets/images/dr-deogracias.png",
    name: "Déogracias NTUKAMAZINA",
  },
  {
    image: "/assets/images/dr-hermann.png",
    name: "Hermann NIMPAYE",
  },
  {
    image: "/assets/images/dr-gerard.png",
    name: "Gérard NDAYIZEYE",
  },
  {
    image: "/assets/images/dr-sebastien.png",
    name: "Sébatien MANIRAKIZA",
  },
  {
    image: "/assets/images/dr-zacharie.png",
    name: "Zacharie NDIZEYE",
  },
  {
    image: "/assets/images/dr-alice.png",
    name: "Alice NDAYISHIMIYE",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
