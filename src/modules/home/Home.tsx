import SelectOptions from "@/components/SelectOptions";
import { FC, useState } from "react";

interface Data {
  [key: string]: {
    [key: string]: number;
  };
}

const Home: FC = () => {
  const [data, setData] = useState<Data>({});

  const handleNilaiChange = (
    aspek: string,
    mahasiswa: string,
    nilai: number
  ) => {
    setData((prevData) => ({
      ...prevData,
      [aspek]: {
        ...prevData[aspek],
        [mahasiswa]: nilai,
      },
    }));
  };

  const handleSave = () => {
    console.log(data);
  };

  return (
    <section className="md:mx-10 min-h-screen bg-white py-5">
      <div className="mx-auto w-full px-3 md:w-3/5">
        <div className="w-full my-10">
          <h1 className="text-4xl font-bold tracking-tight text-center sm:text-6xl">
            Aplikasi Penilaian Mahasiswa
          </h1>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white divide-y divide-gray-200">
              <tr>
                <th></th>
                <th className="px-4 py-3 text-center text-md font-medium text-gray-900 tracking-wider">
                  Aspek Penilaian 1
                </th>
                <th className="px-4 py-3 text-center text-md font-medium text-gray-900 tracking-wider">
                  Aspek Penilaian 2
                </th>
                <th className="px-4 py-3 text-center text-md font-medium text-gray-900 tracking-wider">
                  Aspek Penilaian 3
                </th>
                <th className="px-4 py-3 text-center text-md font-medium text-gray-900 tracking-wider">
                  Aspek Penilaian 4
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.from({ length: 10 }, (_, index) => (
                <tr key={index} className="">
                  <td className="border-y border-l px-4 py-3 text-md whitespace-nowrap">
                    <div className="flex">
                      <img
                        src="assets/icons/profile.jpg"
                        alt="User Icon"
                        className="w-5 h-5 rounded-full mr-4"
                      />
                      Mahasiswa {index + 1}
                    </div>
                  </td>
                  <td className="border-y px-4 py-3 whitespace-nowrap">
                    <SelectOptions
                      value={
                        data["aspek_penilaian_1"]?.[`mahasiswa_${index + 1}`] ||
                        ""
                      }
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleNilaiChange(
                          "aspek_penilaian_1",
                          `mahasiswa_${index + 1}`,
                          Number(e.target.value)
                        )
                      }
                    />
                  </td>
                  <td className="border-y px-4 py-3 whitespace-nowrap">
                    <SelectOptions
                      value={
                        data["aspek_penilaian_2"]?.[`mahasiswa_${index + 1}`] ||
                        ""
                      }
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleNilaiChange(
                          "aspek_penilaian_2",
                          `mahasiswa_${index + 1}`,
                          Number(e.target.value)
                        )
                      }
                    />
                  </td>
                  <td className="border-y px-4 py-3 whitespace-nowrap">
                    <SelectOptions
                      value={
                        data["aspek_penilaian_3"]?.[`mahasiswa_${index + 1}`] ||
                        ""
                      }
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleNilaiChange(
                          "aspek_penilaian_3",
                          `mahasiswa_${index + 1}`,
                          Number(e.target.value)
                        )
                      }
                    />
                  </td>
                  <td className="border-y border-r px-4 py-3 whitespace-nowrap">
                    <SelectOptions
                      value={
                        data["aspek_penilaian_4"]?.[`mahasiswa_${index + 1}`] ||
                        ""
                      }
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleNilaiChange(
                          "aspek_penilaian_4",
                          `mahasiswa_${index + 1}`,
                          Number(e.target.value)
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end ">
          <button
            type="submit"
            className="bg-black text-white mt-10 px-3 py-1 text-center mx-6"
            onClick={handleSave}>
            Simpan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
