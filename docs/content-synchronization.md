# WYSIWYG Editor IndexedDB Architecture

This document outlines the IndexedDB object store architecture used by the WYSIWYG Editor plugin.

```mermaid
erDiagram
    Markdown {
        string id PK
        string content
        string frontMatter
        number lastModified
    }
```
