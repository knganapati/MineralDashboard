// import React, { useState, useEffect } from 'react';
// import { Check, Award, Database, Settings, Map, FileText, Upload, MapPin, Terminal, Zap, Brain, RefreshCw, Cpu, Search } from 'lucide-react';
// import { BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

// // Your entire MineralExplorationDashboard component code here
// // (The full component code you provided)

// export default React

  // Add a Geological Mapping component for heatmaps and detailed visualization
  const GeologicalMapping = ({ data }) => {
    if (!data) return null;
    
    // Sample heatmap data - this would come from the actual analysis
    const heatmapColors = [
      '#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', 
      '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'
    ];
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Geological Mapping & Spatial Analysis</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Mineralization Potential Heatmap</h3>
            <div className="h-80 bg-gray-100 rounded-md overflow-hidden relative">
              {/* Gradient background simulating a heatmap */}
              <div className="absolute inset-0" style={{
                background: `radial-gradient(circle at 40% 30%, 
                  ${heatmapColors[9]}, ${heatmapColors[8]} 5%, 
                  ${heatmapColors[7]} 15%, ${heatmapColors[6]} 25%, 
                  ${heatmapColors[5]} 35%, ${heatmapColors[4]} 45%, 
                  ${heatmapColors[3]} 55%, ${heatmapColors[2]} 70%, 
                  ${heatmapColors[1]} 85%, ${heatmapColors[0]} 95%)`
              }}></div>
              
              {/* Topographic contour lines */}
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100,100 Q150,50 200,100 T300,100 T400,100 T500,100 T600,100' stroke='white' stroke-width='1' fill='none' opacity='0.3' /%3E%3Cpath d='M100,120 Q150,70 200,120 T300,120 T400,120 T500,120 T600,120' stroke='white' stroke-width='1' fill='none' opacity='0.3' /%3E%3Cpath d='M100,140 Q150,90 200,140 T300,140 T400,140 T500,140 T600,140' stroke='white' stroke-width='1' fill='none' opacity='0.3' /%3E%3Cpath d='M100,160 Q150,110 200,160 T300,160 T400,160 T500,160 T600,160' stroke='white' stroke-width='1' fill='none' opacity='0.3' /%3E%3Cpath d='M100,180 Q150,130 200,180 T300,180 T400,180 T500,180 T600,180' stroke='white' stroke-width='1' fill='none' opacity='0.3' /%3E%3Cpath d='M100,200 Q150,150 200,200 T300,200 T400,200 T500,200 T600,200' stroke='white' stroke-width='1' fill='none' opacity='0.3' /%3E%3Cpath d='M100,220 Q150,170 200,220 T300,220 T400,220 T500,220 T600,220' stroke='white' stroke-width='1' fill='none' opacity='0.3' /%3E%3Cpath d='M100,240 Q150,190 200,240 T300,240 T400,240 T500,240 T600,240' stroke='white' stroke-width='1' fill='none' opacity='0.3' /%3E%3Cpath d='M100,260 Q150,210 200,260 T300,260 T400,260 T500,260 T600,260' stroke='white' stroke-width='1' fill='none' opacity='0.3' /%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}></div>
              
              {/* Geological faults */}
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M200,50 L350,250' stroke='white' stroke-width='2' stroke-dasharray='5,5' fill='none' /%3E%3Cpath d='M400,100 L300,300' stroke='white' stroke-width='2' stroke-dasharray='5,5' fill='none' /%3E%3Cpath d='M500,80 L450,280' stroke='white' stroke-width='2' stroke-dasharray='5,5' fill='none' /%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}></div>
              
              {/* Drill locations */}
              <div className="absolute top-1/3 left-2/5">
                <div className="w-3 h-3 border-2 border-white bg-transparent rounded-full"></div>
              </div>
              <div className="absolute top-1/4 left-1/3">
                <div className="w-3 h-3 border-2 border-white bg-transparent rounded-full"></div>
              </div>
              <div className="absolute top-2/5 left-2/4">
                <div className="w-3 h-3 border-2 border-white bg-transparent rounded-full"></div>
              </div>
              
              {/* High potential zone marker */}
              <div className="absolute top-1/3 left-2/5 -mt-12 -ml-12">
                <div className="w-24 h-24 border-2 border-white border-dashed rounded-full bg-transparent opacity-50"></div>
              </div>
              
              {/* Legend */}
              <div className="absolute bottom-2 right-2 bg-white bg-opacity-75 p-2 rounded">
                <div className="text-xs font-medium mb-1">Mineralization Potential</div>
                <div className="flex h-3">
                  {heatmapColors.map((color, idx) => (
                    <div key={idx} className="w-3" style={{backgroundColor: color}}></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs mt-0.5">
                  <span>Low</span>
                  <span>High</span>
                </div>
                
                <div className="mt-2 space-y-1">
                  <div className="flex items-center">
                    <div className="w-4 border-t-2 border-white border-dashed"></div>
                    <span className="text-xs ml-1">Fault lines</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 border-2 border-white bg-transparent rounded-full"></div>
                    <span className="text-xs ml-1">Drill locations</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-2 left-2 bg-white bg-opacity-75 p-2 rounded">
                <div className="text-xs font-bold">Target Zone</div>
                <div className="text-xs">34.5°N, 106.3°W</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Geophysical Anomaly Map</h3>
            <div className="h-80 bg-gray-100 rounded-md overflow-hidden relative">
              {/* Background gradient simulating magnetic data */}
              <div className="absolute inset-0" style={{
                background: `linear-gradient(30deg, ${heatmapColors[0]}, ${heatmapColors[2]} 20%, 
                ${heatmapColors[4]} 30%, ${heatmapColors[6]} 50%, ${heatmapColors[8]} 70%, 
                ${heatmapColors[9]} 80%, ${heatmapColors[7]} 90%)`
              }}></div>
              
              {/* Contour lines for magnetic data */}
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='400' cy='200' rx='100' ry='80' stroke='white' stroke-width='1' fill='none' opacity='0.5' /%3E%3Cellipse cx='400' cy='200' rx='150' ry='120' stroke='white' stroke-width='1' fill='none' opacity='0.4' /%3E%3Cellipse cx='400' cy='200' rx='200' ry='160' stroke='white' stroke-width='1' fill='none' opacity='0.3' /%3E%3Cellipse cx='400' cy='200' rx='250' ry='200' stroke='white' stroke-width='1' fill='none' opacity='0.2' /%3E%3Cellipse cx='400' cy='200' rx='300' ry='240' stroke='white' stroke-width='1' fill='none' opacity='0.1' /%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}></div>
              
              {/* IP anomaly */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-24 border border-white rounded-full opacity-60"></div>
                <div className="w-48 h-36 border border-white rounded-full opacity-40 -mt-30 -ml-8"></div>
                <div className="w-64 h-48 border border-white rounded-full opacity-20 -mt-42 -ml-16"></div>
              </div>
              
              {/* Add grid lines */}
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100,0 L100,400' stroke='white' stroke-width='0.5' stroke-opacity='0.2' /%3E%3Cpath d='M200,0 L200,400' stroke='white' stroke-width='0.5' stroke-opacity='0.2' /%3E%3Cpath d='M300,0 L300,400' stroke='white' stroke-width='0.5' stroke-opacity='0.2' /%3E%3Cpath d='M400,0 L400,400' stroke='white' stroke-width='0.5' stroke-opacity='0.2' /%3E%3Cpath d='M500,0 L500,400' stroke='white' stroke-width='0.5' stroke-opacity='0.2' /%3E%3Cpath d='M600,0 L600,400' stroke='white' stroke-width='0.5' stroke-opacity='0.2' /%3E%3Cpath d='M700,0 L700,400' stroke='white' stroke-width='0.5' stroke-opacity='0.2' /%3E%3Cpath d='M0,100 L800,100' stroke='white' stroke-width='0.5' stroke-opacity='0.2' /%3E%3Cpath d='M0,200 L800,200' stroke='white' stroke-width='0.5' stroke-opacity='0.2' /%3E%3Cpath d='M0,300 L800,300' stroke='white' stroke-width='0.5' stroke-opacity='0.2' /%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}></div>
              
              {/* Legend */}
              <div className="absolute bottom-2 right-2 bg-white bg-opacity-75 p-2 rounded">
                <div className="text-xs font-medium mb-1">Magnetic Intensity</div>
                <div className="flex h-3">
                  {heatmapColors.map((color, idx) => (
                    <div key={idx} className="w-3" style={{backgroundColor: color}}></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs mt-0.5">
                  <span>Low</span>
                  <span>High</span>
                </div>
                
                <div className="mt-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 border border-white rounded-full"></div>
                    <span className="text-xs ml-1">IP Anomaly</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-2 left-2 bg-white bg-opacity-75 p-2 rounded">
                <div className="text-xs font-bold">Magnetic Survey</div>
                <div className="text-xs">100m line spacing</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Geochemical Anomalies</h3>
            <div className="h-64 bg-gray-100 rounded-md overflow-hidden relative">
              {/* Background gradient simulating geochemical data */}
              <div className="absolute inset-0" style={{
                background: `radial-gradient(circle at 65% 35%, ${heatmapColors[9]} 0%, ${heatmapColors[8]} 10%, ${heatmapColors[7]} 20%, ${heatmapColors[6]} 30%, ${heatmapColors[5]} 40%, ${heatmapColors[4]} 60%, ${heatmapColors[2]} 80%, ${heatmapColors[0]} 100%)`
              }}></div>
              
              {/* Sample points */}
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='120' cy='80' r='2' fill='white' /%3E%3Ccircle cx='160' cy='120' r='2' fill='white' /%3E%3Ccircle cx='200' cy='100' r='2' fill='white' /%3E%3Ccircle cx='240' cy='90' r='2' fill='white' /%3E%3Ccircle cx='280' cy='110' r='2' fill='white' /%3E%3Ccircle cx='320' cy='130' r='2' fill='white' /%3E%3Ccircle cx='360' cy='150' r='2' fill='white' /%3E%3Ccircle cx='400' cy='140' r='2' fill='white' /%3E%3Ccircle cx='440' cy='120' r='2' fill='white' /%3E%3Ccircle cx='480' cy='100' r='2' fill='white' /%3E%3Ccircle cx='520' cy='90' r='2' fill='white' /%3E%3Ccircle cx='560' cy='110' r='2' fill='white' /%3E%3Ccircle cx='600' cy='130' r='2' fill='white' /%3E%3Ccircle cx='640' cy='150' r='2' fill='white' /%3E%3Ccircle cx='680' cy='140' r='2' fill='white' /%3E%3Ccircle cx='120' cy='200' r='2' fill='white' /%3E%3Ccircle cx='160' cy='220' r='2' fill='white' /%3E%3Ccircle cx='200' cy='240' r='2' fill='white' /%3E%3Ccircle cx='240' cy='260' r='2' fill='white' /%3E%3Ccircle cx='280' cy='280' r='2' fill='white' /%3E%3Ccircle cx='320' cy='300' r='2' fill='white' /%3E%3Ccircle cx='360' cy='280' r='2' fill='white' /%3E%3Ccircle cx='400' cy='260' r='2' fill='white' /%3E%3Ccircle cx='440' cy='240' r='2' fill='white' /%3E%3Ccircle cx='480' cy='220' r='2' fill='white' /%3E%3Ccircle cx='520' cy='200' r='2' fill='white' /%3E%3Ccircle cx='560' cy='220' r='2' fill='white' /%3E%3Ccircle cx='600' cy='240' r='2' fill='white' /%3E%3Ccircle cx='640' cy='260' r='2' fill='white' /%3E%3Ccircle cx='680' cy='280' r='2' fill='white' /%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}></div>
              
              {/* Legend */}
              <div className="absolute bottom-2 right-2 bg-white bg-opacity-75 p-2 rounded">
                <div className="text-xs font-medium mb-1">Cu in Soil (ppm)</div>
                <div className="flex h-3">
                  {heatmapColors.map((color, idx) => (
                    <div key={idx} className="w-3" style={{backgroundColor: color}}></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs mt-0.5">
                  <span>&lt;50</span>
                  <span>&gt;1000</span>
                </div>
                
                <div className="mt-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-xs ml-1">Sample points</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 p-3 bg-gray-50 rounded-md">
              <div className="text-sm font-medium">Key Anomalies:</div>
              <ul className="mt-1 text-xs text-gray-700 space-y-1">
                <li>• Strong Cu-Mo anomaly coincident with magnetic high</li>
                <li>• Secondary Au pathfinder elements in NW section</li>
                <li>• Zn-Pb halo surrounding central Cu-Mo anomaly</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">3D Deposit Model</h3>
            <div className="h-64 bg-gray-100 rounded-md overflow-hidden relative">
              {/* 3D model visualization - simulated with simple SVG */}
              <div className="absolute inset-0 bg-gray-800" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='200,300 600,300 500,100 300,100' fill='%234A5568' stroke='%23A0AEC0' stroke-width='1' /%3E%3Cpolygon points='200,300 300,100 300,200 200,350' fill='%232D3748' stroke='%23A0AEC0' stroke-width='1' /%3E%3Cpolygon points='600,300 500,100 500,200 600,350' fill='%232D3748' stroke='%23A0AEC0' stroke-width='1' /%3E%3Cpolygon points='200,350 300,200 500,200 600,350' fill='%231A202C' stroke='%23A0AEC0' stroke-width='1' /%3E%3Cellipse cx='400' cy='200' rx='100' ry='50' fill='%23F56565' fill-opacity='0.6' stroke='%23E53E3E' stroke-width='1' /%3E%3Cellipse cx='400' cy='250' rx='120' ry='40' fill='%23F56565' fill-opacity='0.4' stroke='%23E53E3E' stroke-width='1' /%3E%3Cellipse cx='400' cy='300' rx='140' ry='30' fill='%23F56565' fill-opacity='0.2' stroke='%23E53E3E' stroke-width='1' /%3E%3Cline x1='300' y1='150' x2='350' y2='175' stroke='%23ECC94B' stroke-width='4' /%3E%3Cline x1='320' y1='170' x2='370' y2='195' stroke='%23ECC94B' stroke-width='4' /%3E%3Cline x1='340' y1='190' x2='390' y2='215' stroke='%23ECC94B' stroke-width='4' /%3E%3Cline x1='450' y1='175' x2='500' y2='150' stroke='%23ECC94B' stroke-width='4' /%3E%3Cline x1='430' y1='195' x2='480' y2='170' stroke='%23ECC94B' stroke-width='4' /%3E%3Cline x1='410' y1='215' x2='460' y2='190' stroke='%23ECC94B' stroke-width='4' /%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}></div>
              
              {/* Legend */}
              <div className="absolute bottom-2 right-2 bg-white bg-opacity-75 p-2 rounded">
                <div className="text-xs font-medium">Model Elements</div>
                <div className="mt-1 space-y-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3" style={{backgroundColor: '#F56565'}}></div>
                    <span className="text-xs ml-1">Mineralized zone</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-1 bg-yellow-500"></div>
                    <span className="text-xs ml-1">Veining</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3" style={{backgroundColor: '#4A5568'}}></div>
                    <span className="text-xs ml-1">Host rock</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-2 left-2 bg-white bg-opacity-75 p-2 rounded">
                <div className="text-xs font-bold">3D Model View</div>
                <div className="text-xs">Depth: 0-500m</div>
              </div>
            </div>
            
            <div className="mt-3 p-3 bg-gray-50 rounded-md">
              <div className="text-sm font-medium">Model Parameters:</div>
              <div className="mt-1 grid grid-cols-2 gap-x-2 text-xs text-gray-700">
                <div>Target depth: 100-300m</div>
                <div>Confidence: High</div>
                <div>Tonnage: ~300Mt</div>
                <div>Grade: 0.5% Cu, 0.02% Mo</div>
                <div>Alteration: Potassic core</div>
                <div>Structure: Stockwork veining</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };  // Add the Agentic System component
  const AgenticSystem = ({ data }) => {
    if (!data) return null;
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Cpu size={24} className="text-purple-600 mr-2" />
          <h2 className="text-xl font-bold">Neurons AI System</h2>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="mb-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Brain size={18} className="text-purple-600 mr-1" />
                Autonomous Decision Making
              </h3>
              <p className="text-sm text-gray-700">
                The Mineral Exploration Agent operates as an autonomous decision-making entity that processes geological data,
                performs multi-step reasoning, and makes strategic recommendations without human intervention.
              </p>
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-2"> Capabilities</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mt-1 mr-2 flex-shrink-0">
                  <Zap size={16} className="text-yellow-500" />
                </div>
                <div className="text-sm">
                  <span className="font-medium">Multi-step reasoning</span> - Progressive analysis from geological context to specific recommendations
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-2 flex-shrink-0">
                  <Zap size={16} className="text-yellow-500" />
                </div>
                <div className="text-sm">
                  <span className="font-medium">Decision optimization</span> - Intelligent prioritization of exploration activities and budget allocation
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-2 flex-shrink-0">
                  <Zap size={16} className="text-yellow-500" />
                </div>
                <div className="text-sm">
                  <span className="font-medium">Knowledge integration</span> - Combining retrieved information with geological reasoning
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-2 flex-shrink-0">
                  <Zap size={16} className="text-yellow-500" />
                </div>
                <div className="text-sm">
                  <span className="font-medium">Self-assessment</span> - Evaluating confidence in predictions and recommendations
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-2 flex-shrink-0">
                  <Zap size={16} className="text-yellow-500" />
                </div>
                <div className="text-sm">
                  <span className="font-medium">Explanatory reasoning</span> - Providing transparent rationale for all decisions
                </div>
              </li>
            </ul>
          </div>
        </div>
  
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <RefreshCw size={18} className="text-purple-600 mr-1" />
             Decision Process
          </h3>
  
          <div className="relative">
            <div className="absolute left-4 h-full w-0.5 bg-purple-200"></div>
  
            <div className="space-y-4">
              <div className="relative pl-10">
                <div className="absolute left-2.5 w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="p-3 bg-purple-50 rounded-md">
                  <div className="font-medium">1. Context Creation</div>
                  <p className="text-sm text-gray-700">The agent processes input data to create a comprehensive geological context for reasoning.</p>
                </div>
              </div>
  
              <div className="relative pl-10">
                <div className="absolute left-2.5 w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="p-3 bg-purple-50 rounded-md">
                  <div className="font-medium">2. Knowledge Retrieval</div>
                  <p className="text-sm text-gray-700">Similar deposits and geological contexts are retrieved from the knowledge base.</p>
                </div>
              </div>
  
              <div className="relative pl-10">
                <div className="absolute left-2.5 w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="p-3 bg-purple-50 rounded-md">
                  <div className="font-medium">3. Deposit Type Analysis</div>
                  <p className="text-sm text-gray-700">The agent evaluates evidence to determine the most probable deposit type with alternatives.</p>
                </div>
              </div>
  
              <div className="relative pl-10">
                <div className="absolute left-2.5 w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="p-3 bg-purple-50 rounded-md">
                  <div className="font-medium">4. Mineralization Assessment</div>
                  <p className="text-sm text-gray-700">Potential minerals, commodities, grades, and tonnage are evaluated.</p>
                </div>
              </div>
  
              <div className="relative pl-10">
                <div className="absolute left-2.5 w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="p-3 bg-purple-50 rounded-md">
                  <div className="font-medium">5. Exploration Strategy</div>
                  <p className="text-sm text-gray-700">The agent determines optimal drilling, surveys, sampling, and prioritizes actions.</p>
                </div>
              </div>
  
              <div className="relative pl-10">
                <div className="absolute left-2.5 w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="p-3 bg-purple-50 rounded-md">
                  <div className="font-medium">6. Confidence Evaluation</div>
                  <p className="text-sm text-gray-700">Overall confidence and contributing factors are assessed for transparency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }; const KnowledgeBaseResults = ({ data }) => {
    if (!data || !data.retrieved_knowledge) return null;
    
    const knowledgeData = data.retrieved_knowledge;
    const depositTypeData = knowledgeData.deposit_types || [];
    const hostRockData = knowledgeData.host_rocks || [];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Database size={24} className="text-blue-500 mr-2" />
          <h2 className="text-xl font-bold">Knowledge Base</h2>
        </div>
  
        {/* <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold mb-2">Retrieval-Augmented Generation</h3>
          <p className="text-sm text-gray-700">
            The RAG system enhances predictions by retrieving and integrating knowledge from a database of mineral deposits,
            geological contexts, and exploration cases. This improves prediction accuracy beyond what machine learning alone can achieve.
          </p>
        </div> */}
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Retrieved Similar Deposit Types</h3>
            <div className="space-y-2">
              {depositTypeData.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-36 text-sm font-medium">{item.name}</div>
                  <div className="flex-grow h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${(item.score / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-right text-sm">{item.score.toFixed(1)}</div>
                </div>
              ))}
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-3">Retrieved Host Rock Associations</h3>
            <div className="space-y-2">
              {hostRockData.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-36 text-sm font-medium">{item.name}</div>
                  <div className="flex-grow h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-600 rounded-full" 
                      style={{ width: `${(item.score / 4) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-right text-sm">{item.score.toFixed(1)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Pathfinder Element Knowledge</h3>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-wrap gap-2">
              {knowledgeData.pathfinder_elements && knowledgeData.pathfinder_elements.map((element, idx) => (
                <div key={idx} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {element}
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Pathfinder elements identified from the knowledge base that are commonly associated with these deposit types.
              These elements can be used to guide geochemical exploration programs.
            </p>
          </div>
        </div>
  
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Knowledge Integration Process</h3>
          <ol className="space-y-2 text-sm text-gray-700 list-decimal pl-5">
            <li>Query formulation based on geological context</li>
            <li>Knowledge retrieval using vector similarity search</li>
            <li>Relevance scoring and ranking of retrieved documents</li>
            <li>Integration of retrieved knowledge with ML predictions</li>
            <li>Confidence weighting based on knowledge support</li>
            <li>Refinement of deposit type and mineralization predictions</li>
          </ol>
        </div>
      </div>
    );
  };
  
import React, { useState, useEffect } from 'react';
import { Check, Award, Database, Settings, Map, FileText, Upload, MapPin, Terminal, Zap, Brain, RefreshCw, Cpu, Search } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

// Sample data
const SAMPLE_DATA = {
  host_rocks: 'Granodiorite intruded by quartz monzonite porphyry',
  geological_features: 'Stockwork quartz veining with potassic alteration grading outward to phyllic and propylitic alteration',
  deposit_type: 'Porphyry',
  ore_genesis: 'Magmatic-hydrothermal',
  geological_age: 'Cretaceous',
  mineralogy: 'Chalcopyrite, bornite, molybdenite, pyrite',
  tectonic_setting: 'Continental arc',
  pathfinder_elements: ['Cu', 'Mo', 'Au', 'Re', 'Te'],
  latitude: 34.5,
  longitude: -106.3,
  gravity_data: 'Moderate positive anomaly',
  magnetic_data: 'Strong magnetic high with annular low'
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

const MineralExplorationDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [inputData, setInputData] = useState(SAMPLE_DATA);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Initialize with sample data
  useEffect(() => {
    console.log("Component mounted, running initial analysis...");
    // Simulate API call to the backend with a timeout
    setTimeout(() => {
      const results = simulateAnalysis(inputData);
      setAnalysisResults(results);
      setLoading(false);
    }, 1500);
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const runAnalysis = () => {
    setLoading(true);
    
    // Simulate API call to the backend
    setTimeout(() => {
      const results = simulateAnalysis(inputData);
      setAnalysisResults(results);
      setLoading(false);
    }, 1500);
  };
  
  const simulateAnalysis = (data) => {
    // This function simulates running the model on the input data
    
    return {
      input_data: data,
      refined_predictions: {
        deposit_type: data.deposit_type || 'Porphyry',
        deposit_type_confidence: 0.85,
        alternative_deposit_types: [
          { type: 'Skarn', probability: 0.45 },
          { type: 'IOCG', probability: 0.30 }
        ],
        mineral_types: [
          { mineral: 'Chalcopyrite', probability: 0.92, source: 'reported mineralogy' },
          { mineral: 'Bornite', probability: 0.78, source: 'reported mineralogy' },
          { mineral: 'Molybdenite', probability: 0.86, source: 'reported mineralogy' },
          { mineral: 'Pyrite', probability: 0.95, source: 'reported mineralogy' }
        ],
        commodities: [
          { commodity: 'Copper', probability: 0.94, source: 'typical for porphyry deposits' },
          { commodity: 'Molybdenum', probability: 0.88, source: 'typical for porphyry deposits' },
          { commodity: 'Gold', probability: 0.76, source: 'typical for porphyry deposits' }
        ],
        grade_estimates: {
          copper: { low: 0.3, average: 0.5, high: 0.8, unit: '%', confidence: 0.75 },
          molybdenum: { low: 0.01, average: 0.02, high: 0.05, unit: '%', confidence: 0.7 },
          gold: { low: 0.2, average: 0.4, high: 0.8, unit: 'g/t', confidence: 0.65 }
        },
        resource_estimates: {
          size_category: 'large',
          estimated_tonnage: 300,
          unit: 'Mt',
          range: { low: 150, high: 450 },
          confidence: 0.7
        },
        confidence_assessment: {
          overall_confidence: 0.72,
          confidence_level: 'High',
          factors: {
            data_completeness: 0.8,
            deposit_type_confidence: 0.85,
            mineralization_evidence: 0.75,
            knowledge_support: 0.65
          },
          explanation: "The input data is reasonably complete, supporting reliable analysis. There is good evidence supporting the deposit type classification."
        }
      },
      exploration_strategy: {
        drilling: {
          pattern: 'grid',
          spacing: '100-200m',
          depth: '300-1000m',
          angle: 'vertical and angled',
          priority_targets: 'potassic alteration core, phyllic alteration zone',
          specific_targets: [
            "Potassic alteration core",
            "Phyllic alteration zone",
            "Stockwork veining"
          ]
        },
        geophysical_surveys: [
          {
            method: 'ip',
            priority: 'high',
            rationale: 'Highly effective for mapping disseminated sulfide distributions in porphyry systems.'
          },
          {
            method: 'magnetic',
            priority: 'high',
            rationale: 'Identifies magnetite associated with potassic alteration and helps map intrusive boundaries.'
          }
        ],
        budget_allocation: {
          geological_mapping: 0.15,
          geochemical_sampling: 0.20,
          geophysical_surveys: 0.20,
          drilling: 0.40,
          metallurgical_testing: 0.05
        },
        timeline: [
          {
            phase: 'Phase 1',
            activity: 'Detailed mapping',
            start_month: 1,
            duration_months: 2,
            end_month: 3,
            priority: 'high'
          },
          {
            phase: 'Phase 1',
            activity: 'Geochemical sampling',
            start_month: 2,
            duration_months: 2,
            end_month: 4,
            priority: 'high'
          },
          {
            phase: 'Phase 2',
            activity: 'Scout drilling',
            start_month: 5,
            duration_months: 3,
            end_month: 8,
            priority: 'high'
          }
        ]
      },
      decision_explanation: "The geological context suggests a porphyry deposit type with high confidence, based on the host rocks matching typical host rocks for porphyry. Primary economic commodities would be copper, molybdenum, gold.",
      retrieved_knowledge: {
        relevant_deposits: [
          { name: 'Bingham Canyon', location: 'Utah, USA', similarity: 0.85 },
          { name: 'El Teniente', location: 'Chile', similarity: 0.82 },
          { name: 'Grasberg', location: 'Indonesia', similarity: 0.78 }
        ]
      }
    };
  };
  
  // Components
  const InputForm = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Geological Input Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Host Rocks</label>
          <textarea
            name="host_rocks"
            value={inputData.host_rocks}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            rows="2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Geological Features</label>
          <textarea
            name="geological_features"
            value={inputData.geological_features}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            rows="2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Deposit Type</label>
          <input
            type="text"
            name="deposit_type"
            value={inputData.deposit_type}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mineralogy</label>
          <input
            type="text"
            name="mineralogy"
            value={inputData.mineralogy}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={runAnalysis}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Run Analysis'}
        </button>
      </div>
    </div>
  );
  
  const DepositTypePrediction = ({ data }) => {
    if (!data || !data.refined_predictions) return null;
    
    const { deposit_type, deposit_type_confidence, alternative_deposit_types } = data.refined_predictions;
    
    // Prepare data for pie chart
    const pieData = [
      { name: deposit_type, value: deposit_type_confidence },
      ...(alternative_deposit_types || []).map(alt => ({
        name: alt.type,
        value: alt.probability
      }))
    ];
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Deposit Type Analysis</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Primary Deposit Type</h3>
              <div className="mt-2 p-3 bg-blue-50 rounded-md">
                <div className="text-2xl font-bold text-blue-700">{deposit_type}</div>
                <div className="text-sm text-gray-500">Confidence: {(deposit_type_confidence * 100).toFixed(1)}%</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Alternative Deposit Types</h3>
              <div className="mt-2 space-y-2">
                {alternative_deposit_types && alternative_deposit_types.map((alt, idx) => (
                  <div key={idx} className="p-2 bg-gray-50 border border-gray-200 rounded">
                    <div className="font-medium">{alt.type}</div>
                    <div className="text-sm text-gray-500">Probability: {(alt.probability * 100).toFixed(1)}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-2">Deposit Type Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const MineralizationAnalysis = ({ data }) => {
    if (!data || !data.refined_predictions) return null;
    
    const { mineral_types, commodities, grade_estimates } = data.refined_predictions;
    
    // Prepare mineral data for chart
    const mineralData = mineral_types.map(mineral => ({
      name: mineral.mineral,
      probability: mineral.probability
    }));
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Mineralization Analysis</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Potential Minerals</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mineralData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                  <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
                  <Bar dataKey="probability" fill="#8884d8">
                    {mineralData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Grade Estimates</h3>
            <div className="overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commodity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Low</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">High</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {grade_estimates && Object.entries(grade_estimates).map(([commodity, grade], idx) => {
                    if (commodity === 'estimation_confidence') return null;
                    return (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">{commodity}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{grade.low}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{grade.average}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{grade.high}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{grade.unit}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const ExplorationRecommendations = ({ data }) => {
    if (!data || !data.exploration_strategy) return null;
    
    const { drilling, geophysical_surveys, budget_allocation, timeline } = data.exploration_strategy;
    
    // Prepare budget data for chart
    const budgetData = Object.entries(budget_allocation).map(([category, value]) => ({
      name: category.replace('_', ' '),
      value
    }));
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Exploration Recommendations</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Drilling Strategy</h3>
          {drilling && (
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div className="font-medium">Pattern:</div>
                <div>{drilling.pattern}</div>
                
                <div className="font-medium">Spacing:</div>
                <div>{drilling.spacing}</div>
                
                <div className="font-medium">Depth:</div>
                <div>{drilling.depth}</div>
                
                <div className="font-medium">Angle:</div>
                <div>{drilling.angle}</div>
                
                <div className="font-medium">Priority Targets:</div>
                <div>{drilling.priority_targets}</div>
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Budget Allocation</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Geophysical Surveys</h3>
            <div className="space-y-2">
              {geophysical_surveys && geophysical_surveys.map((survey, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-md">
                  <div className="flex justify-between">
                    <div className="font-medium capitalize">{survey.method} Survey</div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      survey.priority === 'high' ? 'bg-red-100 text-red-800' : 
                      survey.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {survey.priority}
                    </span>
                  </div>
                  <div className="text-sm mt-1">{survey.rationale}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Update the SimilarDeposits component with better mapping
  const SimilarDeposits = ({ data }) => {
    if (!data || !data.retrieved_knowledge || !data.retrieved_knowledge.relevant_deposits) return null;
    
    const { relevant_deposits } = data.retrieved_knowledge;
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Similar Deposits</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            {relevant_deposits.map((deposit, idx) => (
              <div key={idx} className="p-3 bg-gray-50 rounded-md">
                <div className="font-medium text-blue-700">{deposit.name}</div>
                <div className="text-sm text-gray-700">Location: {deposit.location}</div>
                <div className="text-sm text-gray-700">Similarity: {(deposit.similarity * 100).toFixed(1)}%</div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Global Deposit Distribution</h3>
            <div className="h-80 bg-blue-50 rounded-md overflow-hidden relative">
              {/* World map background */}
              <div className="absolute inset-0 bg-blue-100" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M122,56L85,92L125,113L175,98L217,129L265,133L315,120L346,146L396,139L415,165L485,173L506,153L546,170L585,143L615,167L672,158L705,182L739,171L758,196' stroke='%23BFDBFE' stroke-width='6' fill='none' /%3E%3Cpath d='M125,205L162,223L196,217L224,245L275,250L331,230L385,251L422,218L476,230L525,205L568,225L625,215L675,236L726,222' stroke='%23BFDBFE' stroke-width='6' fill='none' /%3E%3Cpath d='M179,276L225,289L276,275L336,294L382,270L417,295L477,284L542,302L595,278L650,292L702,271L748,294' stroke='%23BFDBFE' stroke-width='6' fill='none' /%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}></div>
              
              {/* Add deposit markers */}
              {/* Bingham Canyon */}
              <div className="absolute top-1/4 left-1/5 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full relative"></div>
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs">
                    <div className="font-bold">Bingham Canyon</div>
                    <div className="text-xs text-gray-500">40.5°N, 112.1°W</div>
                  </div>
                </div>
              </div>
              
              {/* El Teniente */}
              <div className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full relative"></div>
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs">
                    <div className="font-bold">El Teniente</div>
                    <div className="text-xs text-gray-500">34.1°S, 70.4°W</div>
                  </div>
                </div>
              </div>
              
              {/* Grasberg */}
              <div className="absolute top-2/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full relative"></div>
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs">
                    <div className="font-bold">Grasberg</div>
                    <div className="text-xs text-gray-500">4.1°S, 137.1°E</div>
                  </div>
                </div>
              </div>
              
              {/* Current location marker */}
              <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-5 h-5 bg-blue-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-5 h-5 bg-blue-500 rounded-full relative flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded shadow-md text-xs">
                    <div className="font-bold">Current Target</div>
                    <div className="text-xs">34.5°N, 106.3°W</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-2 left-2 bg-white bg-opacity-50 rounded px-2 py-1">
                <div className="text-xs text-gray-700 font-medium">Deposit Similarity</div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                  <span className="text-xs text-gray-600">Similar Deposits</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                  <span className="text-xs text-gray-600">Current Target</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Regional Geological Context</h3>
          <div className="p-4 bg-gray-50 rounded-md text-sm text-gray-700">
            The identified similar deposits share geological characteristics with the target area, 
            including comparable tectonic settings (Continental arc) and intrusive host rocks.
            These analogs suggest favorable conditions for porphyry-style mineralization in the target region.
          </div>
        </div>
      </div>
    );
  };
  
  const ConfidenceAssessment = ({ data }) => {
    if (!data || !data.refined_predictions || !data.refined_predictions.confidence_assessment) return null;
    
    const { confidence_assessment } = data.refined_predictions;
    const { overall_confidence, confidence_level, factors, explanation } = confidence_assessment;
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Confidence Assessment</h2>
        
        <div className="flex items-center mb-4">
          <div className="text-3xl font-bold mr-3">{(overall_confidence * 100).toFixed(0)}%</div>
          <div className="text-xl font-medium text-gray-700">{confidence_level} Confidence</div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Confidence Factors</h3>
          <div className="space-y-2">
            {Object.entries(factors).map(([factor, value]) => (
              <div key={factor} className="flex items-center">
                <div className="w-48 text-sm capitalize">{factor.replace(/_/g, ' ')}</div>
                <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full" 
                    style={{ width: `${value * 100}%` }}
                  ></div>
                </div>
                <div className="w-12 text-right text-sm">{(value * 100).toFixed(0)}%</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Explanation</h3>
          <div className="p-3 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-700">{explanation}</p>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">EarthScience AI</h1>
              <p className="text-gray-500 mt-1">Advanced geological analysis and exploration optimization system</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm flex items-center">
                <Database size={16} className="mr-1" /> Knowledge Base System Active
              </button>
              <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm flex items-center">
                <Map size={16} className="mr-1" /> GIS Enabled
              </button>
              <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-sm flex items-center">
                <Cpu size={16} className="mr-1" /> Neurons AI Active
              </button>
            </div>
          </div>
        </header>
        
        <div className="mb-6">
          <InputForm />
        </div>
        
        {loading && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 text-center">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
              <div className="text-xl font-bold text-gray-800">Processing Geological Data</div>
              <div className="text-gray-500 mt-2">Analyzing and generating exploration recommendations...</div>
            </div>
          </div>
        )}
        
        {analysisResults && !loading && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Check className="text-green-500" size={24} />
                <h2 className="text-xl font-bold">Analysis Complete</h2>
              </div>
              
              <div>
                <div className="flex border-b border-gray-200 mb-4">
                  <button 
                    className={`px-4 py-2 font-medium focus:outline-none ${activeTab === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(0)}
                  >
                    Deposit Type
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium focus:outline-none ${activeTab === 5 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(5)}
                  >
                    Knowledge Base
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium focus:outline-none ${activeTab === 6 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(6)}
                  >
                    Neurons AI System
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium focus:outline-none ${activeTab === 7 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(7)}
                  >
                    Geological Maps
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium focus:outline-none ${activeTab === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(1)}
                  >
                    Mineralization
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium focus:outline-none ${activeTab === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(2)}
                  >
                    Exploration Plan
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium focus:outline-none ${activeTab === 3 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(3)}
                  >
                    Similar Deposits
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium focus:outline-none ${activeTab === 4 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(4)}
                  >
                    Confidence
                  </button>
                </div>
                
                <div>
                  {activeTab === 0 && <DepositTypePrediction data={analysisResults} />}
                  {activeTab === 1 && <MineralizationAnalysis data={analysisResults} />}
                  {activeTab === 2 && <ExplorationRecommendations data={analysisResults} />}
                  {activeTab === 3 && <SimilarDeposits data={analysisResults} />}
                  {activeTab === 4 && <ConfidenceAssessment data={analysisResults} />}
                  {activeTab === 5 && <KnowledgeBaseResults data={analysisResults} />}
                  {activeTab === 6 && <AgenticSystem data={analysisResults} />}
                  {activeTab === 7 && <GeologicalMapping data={analysisResults} />}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Mineral Exploration AI - Advanced geological analysis system</p>
          <p className="mt-1">© 2025 Mineral Exploration Systems Inc.</p>
        </footer> */}
      </div>
    </div>
  );
};

export default MineralExplorationDashboard;