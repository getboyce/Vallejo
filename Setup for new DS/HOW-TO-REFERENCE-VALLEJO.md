# How to Reference Vallejo Design System

**Complete guide for referencing Vallejo when creating Copart.com prototypes with Cursor, Claude, or Magic Patterns.**

---

## 🎯 **Recommended Approach: GitHub**

**Yes, you should host Vallejo on GitHub.** This is the best solution because:

✅ **Universal Access** - Works with Cursor, Claude, Magic Patterns, and any AI tool  
✅ **Version Control** - Track changes and maintain history  
✅ **Direct URLs** - LLMs can access files directly via GitHub URLs  
✅ **Public/Private** - Choose visibility based on your needs  
✅ **Free** -** GitHub is free for public and private repos  
✅ **Easy Sharing** - Share with team members or AI tools instantly  

---

## 📦 **Step 1: Host on GitHub**

### **Option A: Public Repository (Recommended for AI Tools)**

1. **Create a new repository** on GitHub (e.g., `vallejo-design-system`)
2. **Push your Vallejo files** to the repository
3. **Get your repository URL**: `https://github.com/[username]/vallejo-design-system`

**Benefits:**
- LLMs can access files directly via URLs
- No authentication needed
- Easy to share and reference
- Works with all AI tools

### **Option B: Private Repository**

1. **Create a private repository** on GitHub
2. **Push your Vallejo files**
3. **Use GitHub's raw file URLs** (requires authentication for private repos)

**Note:** Some AI tools may have limited access to private repos. Public repos work best.

---

## 🛠️ **Tool-Specific Instructions**

---

## 🖥️ **Cursor IDE**

### **Method 1: Local Files (Best for Cursor)**

If Vallejo is in your workspace or a local directory:

**Reference in prompts:**
```
Using the Vallejo Design System files in this workspace, create a [component/page] for Copart.com.

Reference files:
- SYSTEM-INDEX.json for navigation
- AI-QUICK-REFERENCE.md for component classes
- test-examples/all-components-demo.html for implementation
```

**Advantages:**
- ✅ Full file access
- ✅ No internet required
- ✅ Fastest access
- ✅ Works offline

### **Method 2: GitHub URL (If hosted elsewhere)**

```
Using the Vallejo Design System from https://github.com/[username]/vallejo-design-system, 
create a [component/page] for Copart.com.

Reference these files:
- https://github.com/[username]/vallejo-design-system/blob/main/SYSTEM-INDEX.json
- https://github.com/[username]/vallejo-design-system/blob/main/AI-QUICK-REFERENCE.md
```

**Cursor can access GitHub files** if you provide the URLs in your prompt.

---

## 🤖 **Claude (Anthropic)**

### **Method 1: GitHub URLs (Recommended)**

Claude can access GitHub files directly via URLs. Use **raw GitHub URLs**:

**Example prompt:**
```
Using the Vallejo Design System for Copart.com, create a login form.

Reference these files:
- System index: https://raw.githubusercontent.com/[username]/vallejo-design-system/main/SYSTEM-INDEX.json
- Quick reference: https://raw.githubusercontent.com/[username]/vallejo-design-system/main/AI-QUICK-REFERENCE.md
- Component demo: https://raw.githubusercontent.com/[username]/vallejo-design-system/main/test-examples/all-components-demo.html

Use exact component classes and follow the structure from the demo.
```

**Raw URL format:**
```
https://raw.githubusercontent.com/[username]/[repo]/[branch]/[file-path]
```

**Key files to reference:**
- `SYSTEM-INDEX.json` - System map
- `AI-QUICK-REFERENCE.md` - Component classes
- `NEW-AGENT-PROMPT.md` - Full context
- `test-examples/all-components-demo.html` - Working examples

### **Method 2: Paste Content (For Small Files)**

For quick reference, you can paste key content directly:

```
Using the Vallejo Design System for Copart.com:

[Paste relevant sections from AI-QUICK-REFERENCE.md]

Create a [component] using these exact classes.
```

**Use this for:**
- Quick component lookups
- Specific class references
- Small token values

---

## ✨ **Magic Patterns**

### **Method 1: GitHub URL (Best)**

Magic Patterns can reference design systems via GitHub URLs:

**In your Magic Patterns prompt:**
```
Using the Vallejo Design System from https://github.com/[username]/vallejo-design-system, 
create a [prototype] for Copart.com.

Reference the Magic Patterns specification:
https://raw.githubusercontent.com/[username]/vallejo-design-system/main/MAGIC_PATTERNS_PROMPT.md
```

### **Method 2: Use MAGIC_PATTERNS_PROMPT.md**

The `MAGIC_PATTERNS_PROMPT.md` file is specifically formatted for Magic Patterns:

**Option A: Copy the entire file**
1. Open `MAGIC_PATTERNS_PROMPT.md`
2. Copy the entire content
3. Paste it into your Magic Patterns prompt
4. Add your specific request at the end

**Option B: Reference via URL**
```
Reference: https://raw.githubusercontent.com/[username]/vallejo-design-system/main/MAGIC_PATTERNS_PROMPT.md

[Your specific prototype request]
```

---

## 📋 **Quick Reference Templates**

### **For Cursor (Local Files)**
```
Using the Vallejo Design System files in this workspace, create a [component/page] for Copart.com.

Start with SYSTEM-INDEX.json to understand the structure, then reference:
- AI-QUICK-REFERENCE.md for component classes
- test-examples/all-components-demo.html for implementation
- docs/design-system-guide.md for usage guidelines
```

### **For Claude (GitHub URLs)**
```
Using the Vallejo Design System for Copart.com from:
https://github.com/[username]/vallejo-design-system

Reference these files:
- https://raw.githubusercontent.com/[username]/vallejo-design-system/main/SYSTEM-INDEX.json
- https://raw.githubusercontent.com/[username]/vallejo-design-system/main/AI-QUICK-REFERENCE.md
- https://raw.githubusercontent.com/[username]/vallejo-design-system/main/test-examples/all-components-demo.html

Create a [component/page] using exact Vallejo classes and structure.
```

### **For Magic Patterns (GitHub URL)**
```
Using the Vallejo Design System for Copart.com:
https://raw.githubusercontent.com/[username]/vallejo-design-system/main/MAGIC_PATTERNS_PROMPT.md

Create a [prototype] following the specifications in that file.
```

---

## 🎯 **Best Practices**

### **1. Always Specify the Context**
```
✅ "Using Vallejo Design System for Copart.com..."
✅ "This will ship on Copart.com..."
❌ "Create a button..." (missing context)
```

### **2. Reference Key Files**
Always point to:
- `SYSTEM-INDEX.json` or `LLM-ACCESS-GUIDE.md` for navigation
- `AI-QUICK-REFERENCE.md` for component classes
- `test-examples/all-components-demo.html` for implementation

### **3. Use Exact Class Names**
```
✅ "Use btn btn-default btn-default-type for primary button"
❌ "Use primary button class"
```

### **4. Include Production Context**
```
✅ "This is for Copart.com vehicle search results"
✅ "This will be used in the Copart member dashboard"
```

---

## 🔗 **GitHub Setup Checklist**

- [ ] Create GitHub repository (public recommended)
- [ ] Push all Vallejo files to repository
- [ ] Verify files are accessible via raw URLs
- [ ] Test raw URL access (open in browser)
- [ ] Update README.md with repository URL
- [ ] Document the repository URL for your team

---

## 📝 **Example: Complete Workflow**

### **Step 1: Host on GitHub**
```bash
# Create repo on GitHub, then:
git init
git add .
git commit -m "Initial Vallejo Design System"
git remote add origin https://github.com/[username]/vallejo-design-system.git
git push -u origin main
```

### **Step 2: Get Your URLs**
Your key files will be at:
- `https://github.com/[username]/vallejo-design-system`
- `https://raw.githubusercontent.com/[username]/vallejo-design-system/main/SYSTEM-INDEX.json`
- `https://raw.githubusercontent.com/[username]/vallejo-design-system/main/AI-QUICK-REFERENCE.md`

### **Step 3: Use in Prompts**

**Cursor:**
```
Using Vallejo Design System in this workspace, create a login form for Copart.com.
```

**Claude:**
```
Using Vallejo Design System from https://github.com/[username]/vallejo-design-system:
- https://raw.githubusercontent.com/[username]/vallejo-design-system/main/AI-QUICK-REFERENCE.md

Create a login form for Copart.com using exact Vallejo classes.
```

**Magic Patterns:**
```
Reference: https://raw.githubusercontent.com/[username]/vallejo-design-system/main/MAGIC_PATTERNS_PROMPT.md

Create a Copart.com login page prototype.
```

---

## 🚀 **Quick Start Commands**

### **For Cursor (Local)**
```
Using Vallejo Design System files in this workspace, create [component] for Copart.com.
Reference SYSTEM-INDEX.json and AI-QUICK-REFERENCE.md.
```

### **For Claude (GitHub)**
```
Using Vallejo from https://raw.githubusercontent.com/[username]/vallejo-design-system/main/AI-QUICK-REFERENCE.md,
create [component] for Copart.com.
```

### **For Magic Patterns (GitHub)**
```
Reference: https://raw.githubusercontent.com/[username]/vallejo-design-system/main/MAGIC_PATTERNS_PROMPT.md
Create [prototype] for Copart.com.
```

---

## ❓ **FAQ**

### **Q: Do I need to host on GitHub?**
**A:** For Claude and Magic Patterns, yes. For Cursor, local files work fine, but GitHub makes it easier to share and version.

### **Q: Can I use a private repository?**
**A:** Yes, but some AI tools may have limited access. Public repos work best for AI tool access.

### **Q: What if I don't want to use GitHub?**
**A:** 
- **Cursor**: Use local files
- **Claude**: Paste content directly or use other hosting (GitLab, Bitbucket)
- **Magic Patterns**: Paste `MAGIC_PATTERNS_PROMPT.md` content directly

### **Q: How do I update the design system?**
**A:** Push updates to GitHub, and reference the new commit or branch in your prompts.

### **Q: Can I use a specific version/branch?**
**A:** Yes, reference specific branches or tags:
```
https://raw.githubusercontent.com/[username]/vallejo-design-system/v1.0/AI-QUICK-REFERENCE.md
```

---

## 📚 **Additional Resources**

- **System Navigation**: See `SYSTEM-INDEX.json` for complete file map
- **LLM Guide**: See `LLM-ACCESS-GUIDE.md` for efficient navigation
- **Quick Reference**: See `AI-QUICK-REFERENCE.md` for component classes
- **Magic Patterns**: See `MAGIC_PATTERNS_PROMPT.md` for complete spec

---

**Last Updated:** 2025-01-23  
**Recommended:** Host on GitHub for universal AI tool access
