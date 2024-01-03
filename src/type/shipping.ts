export type TypeShippingRates = {
  id?: number;
  asal?: number;
  tujuan?: number;
  layanan: string;
  harga: string;
  estimati: string;
  relasi_asal: {
    id?: number;
    nama?: string;
  };
  relasi_tujuan: {
    id?: number;
    nama?: string;
  };
};

export type TypeShippingRatesAdd = {
  id?: number;
  asal: number | string;
  tujuan: number | string;
  layanan: string;
  harga: string;
  estimati: string;
};

export const shippingRatesData: TypeShippingRatesAdd = {
  asal: "",
  tujuan: "",
  layanan: "",
  harga: "",
  estimati: "",
};
