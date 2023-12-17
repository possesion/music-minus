import React from "react";
import Error from "./error";
import styles from "./page.module.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

interface Track {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}
const TracksPage = async () => {
  const options = { next: { revalidate: 360 } } as RequestInit;
  const res = await fetch("https://jsonplaceholder.org/users", {
    cache: "no-store",
  });
  const tracks: Track[] = await res.json();

  return (
    <>
      <ErrorBoundary fallback={<Error />}>
        <h2 className="mb-2 pointer text-sky-400 hover:text-sky-200">Tracks</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>firstname</th>
              <th>Lastname</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <tr key={track.id} className={styles.trackElement}>
                <td>{track.id}</td>
                <td>{track.firstname}</td>
                <td>{track.lastname}</td>
                <td>{track.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ErrorBoundary>
    </>
  );
};

export default TracksPage;
