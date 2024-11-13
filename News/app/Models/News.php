<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;
    // Menunjukkan bahwa model ini terhubung dengan table News di database
    protected $table = "news";

    // Field database
    protected $fillable = ['id', 'title', 'author', 'description', 'content', 'url', 'url_image', 'published_at', 'category', 'created_at'];
}

