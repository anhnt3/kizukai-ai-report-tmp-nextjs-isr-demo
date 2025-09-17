'use client';

import { useState } from 'react';

export default function HomePage() {
  const [backendResponse, setBackendResponse] = useState(null);
  const [dataAiResponse, setDataAiResponse] = useState(null);
  const [loading, setLoading] = useState({ backend: false, dataAi: false });

  // BFF API base URL - change this to your BFF service URL
  const BFF_BASE_URL = process.env.NEXT_PUBLIC_BFF_URL || 'http://localhost:80';

  const callBackendAPI = async () => {
    setLoading(prev => ({ ...prev, backend: true }));
    try {
      const response = await fetch(`${BFF_BASE_URL}/api/back-end-api`);
      const data = await response.json();
      setBackendResponse(data);
    } catch (error) {
      setBackendResponse({ error: error.message });
    } finally {
      setLoading(prev => ({ ...prev, backend: false }));
    }
  };

  const callDataAI = async () => {
    setLoading(prev => ({ ...prev, dataAi: true }));
    try {
      const response = await fetch(`${BFF_BASE_URL}/api/data-ai`);
      const data = await response.json();
      setDataAiResponse(data);
    } catch (error) {
      setDataAiResponse({ error: error.message });
    } finally {
      setLoading(prev => ({ ...prev, dataAi: false }));
    }
  };

  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Kizukai AI Report Platform - BFF API Test</h1>
      <p>Test connectivity between Frontend → BFF → Backend Services</p>
      
      <div style={{ marginTop: 32 }}>
        <h2>API Testing Buttons</h2>
        
        <div style={{ marginBottom: 24 }}>
          <button 
            onClick={callBackendAPI}
            disabled={loading.backend}
            style={{
              padding: '12px 24px',
              fontSize: 16,
              backgroundColor: loading.backend ? '#cccccc' : '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: loading.backend ? 'not-allowed' : 'pointer',
              marginRight: 16
            }}
          >
            {loading.backend ? 'Loading...' : 'Call Backend API'}
          </button>
          
          <button 
            onClick={callDataAI}
            disabled={loading.dataAi}
            style={{
              padding: '12px 24px',
              fontSize: 16,
              backgroundColor: loading.dataAi ? '#cccccc' : '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: loading.dataAi ? 'not-allowed' : 'pointer'
            }}
          >
            {loading.dataAi ? 'Loading...' : 'Call Data AI'}
          </button>
        </div>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {/* Backend API Response */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <h3>Backend API Response:</h3>
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: 16,
              borderRadius: 4,
              border: '1px solid #ddd',
              minHeight: 100,
              fontFamily: 'monospace',
              fontSize: 14,
              whiteSpace: 'pre-wrap'
            }}>
              {backendResponse ? JSON.stringify(backendResponse, null, 2) : 'No response yet'}
            </div>
          </div>

          {/* Data AI Response */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <h3>Data AI Response:</h3>
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: 16,
              borderRadius: 4,
              border: '1px solid #ddd',
              minHeight: 100,
              fontFamily: 'monospace',
              fontSize: 14,
              whiteSpace: 'pre-wrap'
            }}>
              {dataAiResponse ? JSON.stringify(dataAiResponse, null, 2) : 'No response yet'}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24, padding: 16, backgroundColor: '#e3f2fd', borderRadius: 4 }}>
          <h3>🔗 Connection Flow</h3>
          <p style={{ margin: 0 }}>
            <strong>Frontend (Next.js)</strong> → 
            <strong> BFF Service</strong> → 
            <strong> Backend API / Data AI Services</strong>
          </p>
          <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
            BFF URL: {BFF_BASE_URL}
          </p>
        </div>
      </div>
    </main>
  );
}


