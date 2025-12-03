import React from 'react';

function Login(props) {
  const videos = [
    { id: 1, title: 'Getting Started with React', views: '1.2M', comments: '3,456', likes: '98k', dislikes: '1.2k', thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
    { id: 2, title: 'Tailwind CSS for Beginners', views: '876k', comments: '2,189', likes: '76k', dislikes: '980', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s' },
    { id: 3, title: 'Building a Dashboard with React & Tailwind', views: '1.5M', comments: '4,567', likes: '123k', dislikes: '2.1k', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
    { id: 4, title: 'Advanced JavaScript Concepts', views: '2.1M', comments: '8,901', likes: '210k', dislikes: '3.4k', thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
     
      <aside className="w-64 flex-shrink-0 bg-gray-800 p-6 hidden md:block">
        <div className="text-2xl font-semibold mb-8">
          <span className="text-red-500">You</span>Tube Studio
        </div>
        <nav>
          <ul>
            <li className="mb-4"><a href="#" className="flex items-center text-gray-300 hover:text-white"><span className="mr-3">🏠</span>Dashboard</a></li>
            <li className="mb-4"><a href="#" className="flex items-center text-gray-300 hover:text-white"><span className="mr-3">🎬</span>Content</a></li>
            <li className="mb-4"><a href="#" className="flex items-center text-gray-300 hover:text-white"><span className="mr-3">📊</span>Analytics</a></li>
            <li className="mb-4"><a href="#" className="flex items-center text-gray-300 hover:text-white"><span className="mr-3">💬</span>Comments</a></li>
            <li className="mb-4"><a href="#" className="flex items-center text-gray-300 hover:text-white"><span className="mr-3">⚙️</span>Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Channel Dashboard</h1>
          <div className="flex items-center">
            <input type="text" placeholder="Search" className="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none" />
            <div className="ml-6">Hello, {String(props.collect)}</div>
            <img src="https://i.pravatar.cc/40" alt="User Avatar" className="w-10 h-10 rounded-full ml-4" />
          </div>
        </header>

        {/* Video Stats */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Latest Video Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  <div className="text-gray-400 text-sm">
                    <p>Views: {video.views}</p>
                    <p>Comments: {video.comments}</p>
                    <p>Likes: {video.likes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;