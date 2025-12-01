import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Plus, Edit, Trash2, Eye, Search } from 'lucide-react';
import { Input } from '../../components/ui/input';

const AdminBlog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Como a Automação RPA pode transformar sua operação',
      category: 'Automação',
      date: '15 Mar 2025',
      status: 'published',
      views: 1234
    },
    {
      id: 2,
      title: 'IA Comercial: O futuro das vendas previsíveis',
      category: 'IA',
      date: '10 Mar 2025',
      status: 'published',
      views: 856
    },
    {
      id: 3,
      title: 'Cloud Computing: Por que migrar agora?',
      category: 'Cloud',
      date: '05 Mar 2025',
      status: 'draft',
      views: 0
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setShowEditor(true);
  };

  const handleNewPost = () => {
    setEditingPost(null);
    setShowEditor(true);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showEditor) {
    return <BlogEditor post={editingPost} onClose={() => setShowEditor(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Administração do <span className="text-[#4A90E2]">Blog</span>
          </h1>
          <p className="text-gray-400">Gerencie posts, categorias e conteúdo</p>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-[#151518] border-white/10 text-white placeholder:text-gray-500"
            />
          </div>
          <Button 
            onClick={handleNewPost}
            className="bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Novo Post
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total de Posts</p>
                  <p className="text-3xl font-bold text-white">{posts.length}</p>
                </div>
                <div className="h-12 w-12 bg-[#4A90E2]/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-[#4A90E2]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Publicados</p>
                  <p className="text-3xl font-bold text-white">
                    {posts.filter(p => p.status === 'published').length}
                  </p>
                </div>
                <div className="h-12 w-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Rascunhos</p>
                  <p className="text-3xl font-bold text-white">
                    {posts.filter(p => p.status === 'draft').length}
                  </p>
                </div>
                <div className="h-12 w-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                  <Edit className="h-6 w-6 text-[#F5A623]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Posts Table */}
        <Card className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Título</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Categoria</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Data</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Visualizações</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-sm text-white font-medium">{post.title}</td>
                      <td className="py-4 px-4">
                        <span className="text-xs bg-[#4A90E2]/10 text-[#4A90E2] px-2 py-1 rounded">
                          {post.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-400">{post.date}</td>
                      <td className="py-4 px-4">
                        <span className={`text-xs px-2 py-1 rounded ${
                          post.status === 'published' 
                            ? 'bg-green-500/10 text-green-500' 
                            : 'bg-[#F5A623]/10 text-[#F5A623]'
                        }`}>
                          {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-400">{post.views}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(post)}
                            className="text-[#4A90E2] hover:bg-[#4A90E2]/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(post.id)}
                            className="text-red-400 hover:bg-red-400/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Componente de editor simplificado (placeholder)
const BlogEditor = ({ post, onClose }) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    category: post?.category || '',
    excerpt: '',
    content: '',
    image: '',
    status: post?.status || 'draft'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de salvar
    console.log('Salvando post:', formData);
    alert('Post salvo com sucesso!');
    onClose();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {post ? 'Editar Post' : 'Novo Post'}
          </h1>
          <p className="text-gray-400">Preencha os campos abaixo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border-white/10">
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Título</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="bg-[#0a0a0b] border-white/10 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Categoria</label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="bg-[#0a0a0b] border-white/10 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Resumo</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  className="w-full bg-[#0a0a0b] border border-white/10 rounded-md p-3 text-white min-h-[100px]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Conteúdo</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="w-full bg-[#0a0a0b] border border-white/10 rounded-md p-3 text-white min-h-[300px]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">URL da Imagem</label>
                <Input
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="bg-[#0a0a0b] border-white/10 text-white"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full bg-[#0a0a0b] border border-white/10 rounded-md p-3 text-white"
                >
                  <option value="draft">Rascunho</option>
                  <option value="published">Publicado</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" className="bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white">
              Salvar Post
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="border-white/10 text-white hover:bg-white/5">
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminBlog;
