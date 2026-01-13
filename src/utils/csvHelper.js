import Papa from 'papaparse';

export const fetchCSVData = async (fileName) => {
    try {
        const response = await fetch(`/data/${fileName}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
        }

        const csv = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse(csv, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    resolve(results.data);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
    } catch (error) {
        console.error(`Error fetching ${fileName}:`, error);
        return [];
    }
};
