import React from "react";

export function Welcome({ message }: { message: string }) {
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="text-center p-8">
                <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                    Kognova Nexus MotherFucker
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    A centralized document repository
                </p>
                {message && (
                    <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <p className="text-gray-700 dark:text-gray-300">{message}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
